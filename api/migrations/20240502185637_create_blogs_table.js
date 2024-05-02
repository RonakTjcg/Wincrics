/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('blogs', function(table) {
    table.increments('id').primary();
    table.string('title', 2000);
    table.string('match_news', 2000);
    table.date('date');
    table.time('time');
    table.string('venue', 2000);
    table.jsonb('teams');
    table.specificType('imp_player', 'VARCHAR(2000)[]');
    table.specificType('captain', 'VARCHAR(2000)[]');
    table.specificType('fantasy_team', 'VARCHAR(2000)[]');
    table.specificType('vice_captain', 'VARCHAR(2000)[]');
    table.integer('upload_by').references('id').inTable('admin');
    table.specificType('tags', 'VARCHAR(2000)[]');
    table.string('metadata', 2000);
    table.text('description');
    table.specificType('images', 'VARCHAR(2000)[]');
    table.boolean('delete_by').defaultTo(false);
    table.specificType('playing_11', 'VARCHAR(100)[]');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('blogs');
};