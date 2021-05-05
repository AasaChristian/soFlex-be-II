// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'soflex2',
      user:     'postgres',
      password: 'Mastat20'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + '/migrations'
    },
    ssl: {      /* <----- Add SSL option */
      require: true,
      rejectUnauthorized: false 
    }
  }

  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: 'd4cjj0k19botpf',
  //     user:     'ygazklkdpfjwyr',
  //     password: '2571ff1a9db0dfcfe835a7f2d0f5a6de19afb43f9c4a127f4a5caf227a8e822a'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
