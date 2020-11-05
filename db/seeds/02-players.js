const players =  require('../constants/players-data');

exports.seed = (knex) => {
  const modifiedPlayers = players.data.map((player) => {
    return {
      ...player,
      team: player.team.id
    }
  });

  return knex('players').del()
  .then(() => {
    return knex('players').insert(modifiedPlayers);
  });
}