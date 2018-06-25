const User = require('../models/UserProfileModel');

export const getUser = async (req, res) => {
  let result;
  try {
    result = await User.findOneAsync({ email: 'coryell1287@gmail.com' });
    console.log(result, 'here is the result of the query.');
    return res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export default getUser;
