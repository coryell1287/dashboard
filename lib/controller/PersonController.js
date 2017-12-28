const MyModel = require('../models/PersonModels');

export const getPerson = async (req, res) => {
  let result;
  try {
    result = await MyModel.findOneAsync({ name: 'data' });
    res.send(result);
    return;
  } catch (err) {
    console.log(err);
  }
};
