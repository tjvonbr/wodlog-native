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

// GET exercise by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  exercises.fetchExerciseById(id)
    .then(exercise => {
      console.log(exercise);
      res.status(200).json(exercise);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, but there was an issue finding this exercise.' })
    })
})

// POST a new exercise
router.post('/', (req, res) => {
  const exercise = req.body;

  exercises.addExercise(exercise)
    .then(newExercise => {
      console.log("NEW EXERCISE", newExercise);
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
    .then(deleted => {
      console.log(deleted);
      res.status(200).json(deleted);
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
      res.status(200).json(updated);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, but there was an issue updating this exercise.'})
    })
})

module.exports = router;
