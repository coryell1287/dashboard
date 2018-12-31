import jwt from 'jsonwebtoken';

function getUserId({ req }) {
  if (!req.get('Authorization')) {
    throw new Error('Authentication is required.');
  }
  const auth = req.get('Authorization').replace('Bearer', '').trim();
  const verified = jwt.verify(auth, process.env.JWT_SECRET);
  return verified.email;
}

export default getUserId;
