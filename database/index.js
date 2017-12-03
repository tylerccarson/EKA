const config = require('../knexfile.js');  
const env = process.env.NODE_ENV || 'development';  
const knex = require('knex')(config[env]);
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;

knex.migrate.latest([config]); 