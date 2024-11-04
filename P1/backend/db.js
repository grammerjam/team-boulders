// database connection
require("dotenv").config();

const knex = require("knex");
const knexFile = require("./knexfile");
const environment = process.env.NODE_ENV || "development";

const db = knex(knexFile[environment]);

module.exports = db;