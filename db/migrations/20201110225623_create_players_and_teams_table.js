
exports.up = function(knex) {
  return knex.schema
  .createTable('teams', (table) => {
    table.increments('id');
    table.string('abbreviation');
    table.string('full_name');
    table.string('name');
    table.string('conference');
    table.string('division');
    table.string('city');
  })
  .createTable('players', (table) => {
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.decimal('height_feet');
    table.decimal('height_inches');
    table.decimal('weight_pounds');
    table.string('position');
    table.integer('team');
    table.foreign('team').references('id').inTable('teams');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams').dropTable('players');
};
