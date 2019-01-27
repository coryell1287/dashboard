import jwt from 'jsonwebtoken';


// async function getUser()
async function getUserId(client, req) {
  const auth = req.get('Authorization').replace('Bearer', '').trim();
  const verified = jwt.verify(auth, process.env.JWT_SECRET);
  const query = 'SELECT roles, permissions, email FROM user_profile WHERE email = ?';
  const params = [verified.email];
  try {
    const user = await client.execute(query, params, { prepare: true });
    return user.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}

export default getUserId;

