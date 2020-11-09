const express = require('express');
var cors = require("cors");
var playerRouter = require('./api/players').router;
var teamRouter = require('./api/teams').router
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', playerRouter);
app.use('/api', teamRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})