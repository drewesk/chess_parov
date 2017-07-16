const dotenv = require('dotenv')
dotenv.config();

module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql://localhost/chess-parov"
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
