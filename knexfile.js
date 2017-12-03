// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      database: 'eka_assessment'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'ec2-54-227-237-223.compute-1.amazonaws.com',
      port: 5432,
      database: 'd9c009lsu73vqm',
      user:     'ywkcvsgtnbrrbq',
      password: '4b4602073225d1d8b607674a364d04410f26fb0874afbe0f45f7de5b52db2c72'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
