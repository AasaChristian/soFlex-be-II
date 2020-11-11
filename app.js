const express = require('express')
const app = express()
const server = require('http').createServer(app);


const Port = process.env.PORT || 5000;

const Users = require('./Routers/user-router')
const Exercies = require('./Routers/exercises-router')
const Regimen = require('./Routers/regimen-router')
const cors = require('cors')

server.listen(Port, () => {
    console.log(`Listening at ${Port}`);
  });
  
  var corsOptions = {
      origin: process.env.BASE_URL || "http://localhost:3000",
      methods: "GET,PUT,POST,DELETE",
         credentials: false
  }
  app.use(cors(corsOptions));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send({ response: "I am alive Test" }).status(200);
  });

  app.use('/api/users', Users);
  app.use('/api/exercises', Exercies);
  app.use('/api/regimen', Regimen);