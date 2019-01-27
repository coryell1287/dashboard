import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function userExists(client, email) {
  const query = 'SELECT email from user_profile WHERE email = ?';
  const params = [email];
  try {
    const results = await client.execute(query, params);
    return results.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}

export async function signOutUser(client, args) {
  const updates = [
    {
      query: 'UPDATE user_profile SET online = ? WHERE email = ?',
      params: [false, args.email]
    },
    {
      query: 'DELETE tokens FROM user_profile WHERE email = ?',
      params: [args.email]
    }
  ];

  try {
    await client.batch(updates, { prepare: true });
    return {
      message: 'User signed out.',
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function insertUser(client, args) {
  const token = jwt.sign({ email: args.email }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRY });
  const roles = ['admin'];
  const permissions = { read: true, write: true };
  const password = await bcrypt.hash(args.password, 10);
  let userResults = null;
  const auth = 'INSERT INTO authentication(email, firstname, surname, password, tokens) VALUES(?, ?, ?, ?, ?) IF NOT EXISTS';
  const authParams = [args.email, args.firstname, args.surname, password, token];
  const user = 'INSERT INTO user_profile(email, username, firstname, surname, online, roles, permissions, tokens) VALUES(?, ?, ?, ?, ?, ?, ?, ?) IF NOT EXISTS';
  const userParams = [args.email, args.username, args.firstname, args.surname, false, roles, permissions, token];
  try {
    const authResults = await client.execute(auth, authParams, { prepare: true });
    if (Object.values(authResults.rows[0])[0]) {
      userResults = await client.execute(user, userParams, { prepare: true });
    }
    return {
      applied: Object.values(userResults.rows[0])[0]
    };
  } catch (error) {
    throw new Error(error);
  }

}

export async function authenticateUser(client, args) {
  const query = 'SELECT email, password, tokens FROM authentication WHERE email = ?';
  const params = [args.email];
  const update = 'UPDATE user_profile SET online = ? WHERE email = ?';
  const updateparams = [true, 'coryell1287@gmail.com'];
  const results = await client.execute(query, params);
  const isMatch = await bcrypt.compare(args.password, results.rows[0].password);
  const doesEmailMatch = args.email === results.rows[0].email;

  const tokenInsert = 'UPDATE user_profile SET tokens = ? WHERE email = ?';
  const tokenParams = [results.rows[0].tokens, args.email];
  if (!isMatch && !doesEmailMatch) throw new Error('Email or password does not match.');
  await client.execute(update, updateparams, { prepare: true });
  await client.execute(tokenInsert, tokenParams, { prepare: true });

  return {
    token: results.rows[0].tokens,
  };
}

export async function getUserProfile(client, args) {
  const query = 'SELECT * FROM user_profile WHERE email = ?';
  const params = [args.email];

  const results = await client.execute(query, params);
  if (results.rows.length === 0) throw new Error('User doesn\'t exists.');
  const user = { ...results.rows[0] };
  let initialArr = [];
  initialArr.push(user.firstname, user.surname);
  const initial = initialArr.map(n => n[0]).join('');
  return {
    ...user,
    initial,
    authorization: {
      roles: [...user.roles],
      permissions: {
        ...user.permissions,
      }
    }
  }

}
