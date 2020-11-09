const express = require('express')
const router = express.Router()

const Player = require('../models/Player')

router.get('/players', (req, res) => {
  Player.query()
    .then(players => {
      res.json(players)
    })
    .catch(err => {
      console.log(err);
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