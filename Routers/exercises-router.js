
const router = require('express').Router();



const Exercises = require('../Models/exercises-model');

// for endpoints beginning with /api/auth


router.get('/find/:id', (req, res) => {
    let id = req.params.id
    console.log(id, "id")

    Exercises.findById(id)
    .then(found => {
        if (!found){
        res.status(400).json({message:`exercises at id ${id} doesn't exist`})  
        }
        res.status(200).json(found)
    })
    .catch(err => {
        console.log(err,"catch")
    })
    
})

router.post('/add', (req, res) => {
  let exercise = req.body;

  Exercises.addExercise(exercise)
    .then(saved => {
        console.log(saved, "saved")
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/update/:id', (req, res) => {
  let { name, description, img } = req.body;
  let id = req.params.id
  const updateObj = {
    name: name,
    description: description,
    img: img
}
Exercises.updateExercise(updateObj, id)

.then(updated => {
    console.log(updated, "updated")
    res.status(200).json({updated: updated})
}).catch(err => res.status(500).json({message: "update unsuccesful"}))
 
});

router.delete('/remove/:id', (req, res) => {
    let id = req.params.id

  Exercises.remove(id)
  .then(removed => {
      if (removed == 1){
        res.status(500).json({message: "exercies was removed"})
      } else {
        res.status(200).json({message: " error finding exercise"})
      }
      
  }).catch(err => res.status(500).json({message: "delete unsuccesful"}))
   
  });


module.exports = router;
