exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE article RESTART IDENTITY CASCADE;')

    .then(function() {
      // Inserts seed entries
      return knex('article').insert([

        {
          title: 'Bacon is Great!',
          author: 'Kevin Bacon',
          body: 'Spicy jalapeno bacon ipsum dolor amet porchetta pork belly doner kielbasa. Doner strip steak alcatra, swine bresaola leberkas shoulder beef ribs capicola prosciutto meatloaf.',
          user_id: 3
        },
        {
          title: 'Porker in the Rye',
          author: 'Salinger',
          body: 'Ham jerky ham hock short ribs alcatra flank, beef ribs rump tail boudin spare ribs meatloaf drumstick. T-bone drumstick chicken fatback kevin jerky alcatra pancetta ribeye tongue.',
          user_id: 2
        },
        {
          title: 'Baconify Your Life..',
          author: 'Bacon-Lover',
          body: 'Spicy jalapeno bacon ipsum dolor amet porchetta pork belly doner kielbasa. Doner strip steak alcatra, swine bresaola leberkas shoulder beef ribs capicola prosciutto meatloaf.',
          user_id: 1
        },
        {
          title: 'Save the Pigs',
          author: 'SomeoneOn a Mission',
          body: 'Ham jerky ham hock short ribs alcatra flank, beef ribs rump tail boudin spare ribs meatloaf drumstick. T-bone drumstick chicken fatback kevin jerky alcatra pancetta ribeye tongue.',
          user_id: 3
        },
        {
          title: 'Bacon is Great #2!',
          author: 'Kevin Bacon',
          body: 'Spicy jalapeno bacon ipsum dolor amet porchetta pork belly doner kielbasa. Doner strip steak alcatra, swine bresaola leberkas shoulder beef ribs capicola prosciutto meatloaf.',
          user_id: 2
        }

      ]);
    });
};
