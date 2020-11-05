const teams =  require('../constants/teams-data');

exports.seed = (knex) => {
  return knex('teams').del()
  .then(() => {
    return knex('teams').insert(teams.data);
  });
}