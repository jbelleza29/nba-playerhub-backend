const express = require('express')
const router = express.Router()

const Player = require('../models/Player')
const orderMap = {
  'ascend': 'asc',
  'descend': 'desc'
}

router.get('/players', async (req, res) => {
  let order = req.query.order || 'ascend';
  let column = req.query.column || 'last_name';
  let page = req.query.page || 0;
  let limit = req.query.pageSize || 10;
  if(page != 0){
    page -= 1;
  }

  Player.query()
    .select('*')
    .join('teams', 'players.team', '=', 'teams.id')
    .page(page, limit)
    .orderBy(column, orderMap[order])
    .then(data => {
      const players = data.results.map((player) => {
        return {
          id: player.id,
          first_name: player.first_name,
          last_name: player.last_name,
          height_feet: player.height_feet,
          height_inches: player.height_inches,
          weight_pounds: player.weight_pounds,
          position: player.position,
          team: {
            name: player.name,
            abbreviation: player.abbreviation,
            full_name: player.full_name,
            divison: player.division,
            city: player.city,
            conference: player.conference
          }
        }
      });
      res.json({ players, total: data.total });
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

router.get('/players/:id', (req, res) => {
  let id = req.params.id;
  Player.query().findById(id)
    .then(players => {
      res.json(players)
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/players', (req, res) => {
  Player.query().insert(req.body)
    .then(player => {
      res.json(player);
    })
    .catch(err => {
      console.log(err);
    })
})

router.put('/players/:id', (req, res) => {
  const id = req.params.id;

  Player.query()
    .patchAndFetchById(id, req.body)
    .then(player => {
      console.log(player);
      res.json(player);
    })
    .catch(err => {
      console.log(err);
    })
})

router.delete('/players/:id', (req, res) => {
  const id = req.params.id;

  Player.query()
    .deleteById(id)
    .then(player => {
      console.log(player);
      res.json(player);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = {
    router: router
}