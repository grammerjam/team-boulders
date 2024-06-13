const moviesData = require("../seed_data/movies.json");

exports.seed = async function (knex) {
  await knex("movies").del();
  await knex("movies").insert(moviesData);
};
