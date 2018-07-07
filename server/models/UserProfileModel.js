const cassandra = require('express-cassandra');
const config = require('../config/db');

const model = cassandra.createClient(config);

const UserProfileModel = model.loadSchema('userprofile', {
  fields: {
    email: 'text',
    authorization: {
      type: 'map',
      typeDef: '<text, boolean>',
    },
    firstname: 'text',
    password: 'text',
    surname: 'text',
  },
  key: ['email'],
});

console.log(model.instance.userprofile === UserProfileModel, 'is an instance of userprofile');

UserProfileModel.syncDB((err, result) => {
  if (err) throw err;
  console.log(result, 'schema updated.');
  // result == true if any database schema was updated
  // result == false if no schema change was detected in your models
});

module.exports = UserProfileModel;
