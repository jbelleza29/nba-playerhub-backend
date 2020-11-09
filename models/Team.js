const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class Team extends Model {
  static get tableName() {
    return 'teams';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = Team;