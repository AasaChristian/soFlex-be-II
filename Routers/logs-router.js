const router = require('express').Router();

const Logs = require('../Models/logs-model')


router.get('/find/:id', (req, res) => {
    let userId = req.params.id
console.log(userId,"userId")

    Logs.findByuserId(userId)
    .then(found => {
      console.log("here")
        if (!found){
        res.status(200).json({message:`User has no logs`})  
        }
        res.status(200).json(found)
        console.log(found)
    })
    .catch(err => {
        console.log(err,"catch")
    })
    
})

router.post('/add', (req, res) => {
    let log = req.body;
  console.log(log, "regimen")
    Logs.addLog(log)
      .then(saved => {
          console.log(saved, "saved")
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  module.exports = router;