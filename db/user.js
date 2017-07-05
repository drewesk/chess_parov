const knex = require('./connection');

module.exports = {
  getOne: (id) => {
    return knex('user').where('id, id').first();
  }
}
