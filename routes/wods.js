var express = require('express');
var router = express.Router();
const wods = require('../models/wods');

// Fetch all wods
router.get('/', (req, res) => {
  wods.fetchAll()
    .then(wods => {
      res.status(200).json(wods)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Sorry, but there was an issue." })
    })
})

/* Post a WOD */ 
router.post('/', (req, res) => {
  const wod = req.body;

  wods.addWod(wod)
    .then(newWod => {
      console.log(newWod);
      res.status(201).json(newWod);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Sorry, but there was an issue." });
    })
})

// Update a WOD
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  wods.updateWod(id, changes)
    .then(updatedWod => {
      console.log(updatedWod);
      res.status(200).json(updatedWod);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Sorry, but there was an issue updating this WOD."})
    })
})

// Add an exercise to a WOD
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const exercise = req.body;

  wods.addExercise(id, exercise)
    .then(newExercise => {
      console.log(newExercise);
      res.status(201).json({newExercise});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ 
          message: "Sorry, but there was an error adding the exercise."
      })
    })
})

module.exports = router;
