const express = require('express')
const app = express()
const server = require('http').createServer(app);


const Port = process.env.PORT || 5000;

const Users = require('./Routers/user-router')
const Exercies = require('./Routers/exercises-router')
const Regimen = require('./Routers/regimen-router')
const Logs = require('./Routers/logs-router')
const cors = require('cors')


const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.HEROKU_POSTGRESQL_IVORY_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});


server.listen(Port, () => {
    console.log(`Listening at ${Port}`);
  });
  
  var corsOptions = {
      origin: process.env.BASE_URL || "http://localhost:3000",
      // origin: "http://localhost:3000",
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
  app.use('/api/logs', Logs);