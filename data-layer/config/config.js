const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  seederStorage: 'sequelize', // Keep track of executed seeds to avoid re-execution upon each deployment
  dialectOptions: {
    ssl:
      process.env.DATABASE_SSL === 'true'
        ? {
            require: true,
            rejectUnauthorized: false,
          }
        : null,
  },
};

module.exports = {
  development: config,
  production: config,
};