const knex = require('../connection');

module.exports = {

  create: (user) => {
    return knex('user').insert(user, 'id')
      .then((ids) => {
        return ids[0];
      });
  },
  getOne: (id) => {
    return knex('user').where('id', id).first();
  },
  getOneByEmail: (email) => {
    return knex('user').where('email', email).first();
  },
  getAll: () => {
    return knex('user');
  },
  deleteUser: (user_id) => {
  return knex('user').where('id', user_id).del();
  }

}
