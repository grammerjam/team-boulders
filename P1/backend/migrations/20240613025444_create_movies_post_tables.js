/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary().notNullable();
    table
      .integer('user_id')
      .unsigned()
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('movie_title', 255).notNullable();
    table.date('release_date', 255).notNullable();
    table.string('genre', 255).notNullable();
    table.string('production_company', 255).notNullable();
    table.string('director', 255).notNullable();
    table.string('rating', 255).notNullable();
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('movies');
};
