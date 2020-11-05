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

  static get relationMappings() {
    const Player = require('./Player');
    return {
      writer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Player,
        join: {
          from: 'teams.id',
          to: 'players.id'
        }
      }
    }
  }
}

module.exports = Team;