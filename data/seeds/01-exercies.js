
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('exercises').truncate()
  return knex('exercises')

    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {id: 1000, name: 'Push-Ups', description: "Front leaning rest, push", img: "null"},
        {id: 1001, name: 'Sit-Ups', description: "Set up", img: "null"},
        {id: 1002, name: 'Butterfly', description: "Chech compression", img: "null"},

      ]);
    });
};
