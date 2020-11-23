var express = require('express');
var router = express.Router();
const exercises = require('../models/exercises');

// GET exercises
router.get('/', (req, res) => {
  exercises.fetchAll()
    .then(exercises => {
      res.status(200).json(exercises);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, but there was an issue.' })
    })
})

// POST a new exercise
router.post('/', (req, res) => {
  const exercise = req.body;

  exercises.addExercise(exercise)
    .then(newExercise => {
      console.log(newExercise);
      res.status(201).json(newExercise);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, but there was an issue adding this exercise.'});
    })
})

// DELETE an exercise
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  exercises.deleteExercise(id)
    .then(remaining => {
      console.log(remaining);
      res.status(200).json(remaining);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, but there was an issue deleting this exercise.'})
    })
})

// UPDATE an exercise
router.put('/:id', (req, res) => {
  const edits = req.body;
  const { id } = req.params;

  exercises.updateExercise(id, edits)
    .then(updated => {
      console.log(updated);
      res.status(204)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, but there was an issue updating this exercise.'})
    })
})

module.exports = router;
