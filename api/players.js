const express = require('express')
const router = express.Router()

const Player = require('../models/Player')

router.get('/players', (req, res) => {
    Player.query()
      .then(players => {
        console.log('here');
        res.json(players)
      })
      .catch(err => {
        console.log(err);
      })
})

module.exports = {
    router: router
}