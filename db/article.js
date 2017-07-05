const knex = require('./connection');

module.exports = {
  getByUserID: (id) => {
    return knex('article').where('user_id', id);
  }
}
