/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('analytics', function(table) {
    table.increments('id').primary();
    table.string('url');
    table.string('method');
    table.jsonb('headers');
    table.jsonb('query');
    table.jsonb('params');
    table.string('ip');
    table.string('protocol');
    table.string('path');
    table.string('time');
    table.string('date');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('analytics');
};
