const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class Player extends Model {
  static get tableName() {
    return 'players';
  }

  static get idColumn() {
    return 'player_id';
  }

  static get relationMappings() {
    const Team = require('./Team');
    return {
      writer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Team,
        join: {
          from: 'players.team',
          to: 'teams.id'
        }
      }
    }
  }
}

module.exports = Player;