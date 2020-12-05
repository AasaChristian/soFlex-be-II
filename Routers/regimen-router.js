
const router = require('express').Router();



const Regimen = require('../Models/regimen-model');

// for endpoints beginning with /api/auth


router.get('/find/:id', (req, res) => {
    let userId = req.params.id
console.log(userId,"userId")

    Regimen.findByuserId(userId)
    .then(found => {
      console.log("here")
        if (!found){
        res.status(400).json({message:`User has no regimen`})  
        }
        res.status(200).json(found)
        console.log(found)
    })
    .catch(err => {
        console.log(err,"catch")
    })
    
})

router.post('/add', (req, res) => {
  let regimen = req.body;
console.log(regimen, "regimen")
  Regimen.addregimen(regimen)
    .then(saved => {
        console.log(saved, "saved")
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/update/:id', (req, res) => {

  console.log(req.body,"body")
  let { name, link, userId, exerciseId, sets, reps, weight, completion} = req.body;
  let id = req.params.id
  const updateObj = {
    name: name,
    link: link,
    userId: userId,
    exerciseId: exerciseId,
    sets: sets,
    reps, reps,
    weight: weight,
    completion: completion
}
Regimen.updateRegimens(updateObj, id, userId)

.then(updated => {

    const uid = updated[0].userId
    console.log(userId, "userId HERE")
    Regimen.findByuserId(uid)
    .then(found => {
      console.log("here")
        if (!found){
        res.status(400).json({message:`User has no regimen`})  
        }
        res.status(200).json(found)
        console.log(found)
    })
    .catch(err => {
        console.log(err,"catch")
    })

}).catch(err => res.status(500).json({message: "update unsuccesful"}), console.log("error here"))
 
});

router.delete('/remove/:id', (req, res) => {
    let id = req.params.id

    Regimen.remove(id)
  .then(removed => {
      if (removed == 1){
        res.status(500).json({message: "regimen was removed"})
      } else {
        res.status(200).json({message: " error finding regimen"})
      }
      
  }).catch(err => res.status(500).json({message: "delete unsuccesful"}))
   
  });


module.exports = router;
