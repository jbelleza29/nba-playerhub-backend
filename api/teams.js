const express = require('express')
const router = express.Router()

const Team = require('../models/Team')

router.get('/teams', (req, res) => {
  Team.query()
    .then(teams => {
      res.json(teams)
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = {
  router: router
}