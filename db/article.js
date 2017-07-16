const knex = require('./connection');

module.exports = {
  create: (article) => {
    return knex("article").insert(article);
  },
  updateArticle: (article_id, article) => {
    return knex('article').where('id', article_id).update(article, '*');
  },
  getByUserID: (id) => {
    return knex('article').where('user_id', id);
  }
}
