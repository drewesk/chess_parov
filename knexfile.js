require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/chess-parov';
  },

  Production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true';
  }

};
