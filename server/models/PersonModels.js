const cassandra = require('express-cassandra');
const config = require('../config/db');

const model = cassandra.createClient(config);

const MyModel = model.loadSchema('config_table', {
  fields: {
    name: 'text',
    surname: 'text',
    age: 'int',
    created: 'timestamp',
  },
  key: ['name'],
});

// MyModel or models.instance.Person can now be used as the model instance
console.log(model.instance.config_table === MyModel);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB((err, result) => {
  if (err) throw err;
  // result == true if any database schema was updated
  // result == false if no schema change was detected in your models
});

module.exports = MyModel;
