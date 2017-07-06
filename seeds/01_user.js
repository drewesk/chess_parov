const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE "user" RESTART IDENTITY CASCADE;')
  .then(() => {

        const users = [
          {
            name: 'Rob',
            email: 'rob@zombie.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          },
          {
            name: 'CJ',
            email: 'C@J.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          },
          {
            name: 'testingBot',
            email: 'test@test.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          }
        ];

        return knex('user').insert(users)

      });
};
