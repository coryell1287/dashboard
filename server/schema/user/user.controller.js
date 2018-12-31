import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function userExists(client, email) {
  const query = 'SELECT email from userprofile WHERE email = ?';
  const params = [email];
  try {
    const results = await client.execute(query, params);
    return results.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}

export async function insertUser(client, args) {
  const token = jwt.sign({ email: args.email }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRY });
  const authorization = { read: true, write: false };
  const tokens = { access: 'business owner', token };
  const insert = 'INSERT INTO userprofile(email, firstname, surname, password, tokens, authorization) VALUES(?, ?, ?, ?, ?, ?) IF NOT EXISTS';
  const password = await bcrypt.hash(args.password, 10);
  const params = [args.email, args.firstname, args.surname, password, tokens, authorization];
  try {
    const results = await client.execute(insert, params, { prepare: true });
    return {
      applied: Object.values(results.rows[0])[0]
    };
  } catch (error) {
    throw new Error(error);
  }

}


export async function signInUser(client, args) {
  const query = 'SELECT * FROM userprofile WHERE email = ?';
  const params = [args.email];

  const results = await client.execute(query, params);
  const isMatch = await bcrypt.compare(args.password, results.rows[0].password);

  if (!isMatch) throw new Error('Email or password does not match.');
  const user = { ...results.rows[0] };
  let initialArr = [];
  let initial = '';
  initialArr.push(user.firstname, user.surname);
  initial = initialArr.map(n => n[0]).join('');
  return {
    ...user,
    initial
  }

}
