const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class Player extends Model {
  static get tableName() {
    return 'players';
  }

  static get idColumn() {
    return 'id';
  }  
}

module.exports = Player;