const MyModel = require('../models/PersonModels');

export const getPerson = async (req, res) => {
  console.log('Get person was called');
  let result;
  try {
    result = await MyModel.findOneAsync({ name: 'Randy' });
    console.log(result);
    return res.send(result);
  } catch (err) {
    console.log(err);
  }
};
