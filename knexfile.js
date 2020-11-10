
const path = require("path")

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/nba_dev',
    migrations: {
      directory: path.join(__dirname, 'db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db/seeds/')
    }
  },
  test: {
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db/seeds')
    }
  }
};
