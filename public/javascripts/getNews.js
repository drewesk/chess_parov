let articles = [];

$(() => {

  $.get(`https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=1c24bece08104a688bc12014db4a6866`)
    .then((response) => {
      articles.push(response);

      for (let key in articles) {
        articles[key].articles.forEach((article) => {
          $('#people').append(
            `<h1>${article.title}</h1>
              <p> -${article.author}</p>
              <img src="${article.urlToImage} alt="pictures"></img>
              <p>${article.description}</p>
              `);
        });
      }
    });
});
