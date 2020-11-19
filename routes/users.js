var express = require('express');
var router = express.Router();
const users = require('../models/users');

// GET all exercises
router.get('/', function(req, res, next) {
  users.fetchAll()
    .then(users => { 
      res.status(200).send(users);
    })
    .catch(err => {
      res.status(500).send({ message: "Sorry, but there was an issue." });
    })
});

// GET exercise by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  users.findById(id)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send({ message: "Sorry, but there was an issue." })
    })
})

// POST a new exercise
router.post('/', (req, res) => {
  const user = req.body;

  users.addUser(user)
    .then(newUser => {
      res.status(201).send(newUser);
    })
    .catch(err => {
      res.status(500).send({ message: "Sorry, but there was an issue." })
    })
})

module.exports = router;
