
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table) {
    table.increments('id').unsigned().primary();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();

    table.string('username').notNull();
    table.string('password').notNull();
    table.string('email').notNull();
    table.string('first').nullable();
    table.string('last').nullable();
    table.string('telephone').nullable();
    table.string('street').nullable();
    table.string('city').nullable();
    table.string('state').nullable();
    table.string('zip').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
