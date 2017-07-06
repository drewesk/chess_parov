const knex = require('./connection');

module.exports = {

  getOne: (id) => {
    return knex('user').where('id', id).first();
  },
   getAll: () => {
    return knex("user");
  },
  deleteUser: (user_id) => {
  return knex('user').where('id', user_id).del();
  }

}
