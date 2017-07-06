exports.up = function(knex, Promise) {

  return knex.schema.createTable("article", (table) => {

    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('author').notNullable();
    table.text('body').notNullable();
    table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('cascade');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('article');
};
