const cassandra = require('express-cassandra');
const config = require('../config/db');

const model = cassandra.createClient(config);

const UserProfileModel = model.loadSchema('user_profiles', {
  fields: {
    username: {
      type: 'text',
      rule: {
        required: true,
        validators: [
          {
            validator: value => value.length > 0,
            message: () => 'This field is required.',
          },
        ],
      },
    },
    email: {
      type: 'text',
      rule: {
        required: true,
        validators: [
          {
            validator: value => value.length > 0,
            message: () => 'This field is required.',
          },
        ],
      },
    },
    password: {
      type: 'text',
      rule: {
        required: true,
        validators: [
          {
            validator: value => value.length > 0,
            message: () => 'This field is required.',
          },
        ],
      },
    },
    roles: [
      {
        role: { type: 'varchar', default: 'tech' },
        privilege: { type: 'varchar', default: 'read' },
      },
    ],
    token: {
      type: 'text',
      rule: {
        required: true,
      },
    },
    first_name: 'text',
    surname: 'text',
  },
  key: ['username'],
});

console.log(model.instance.user_profiles === UserProfileModel);

UserProfileModel.syncDB((err, result) => {
  if (err) throw err;
  // result == true if any database schema was updated
  // result == false if no schema change was detected in your models
});

module.exports = UserProfileModel;
