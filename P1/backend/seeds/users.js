const usersData = require("../seed_data/users.json");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert(usersData);
};
