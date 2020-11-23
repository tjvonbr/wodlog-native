const db = require('../data/db-config');

// Models for exercises
function addExercise(exercise) {
  return db('exercises')
    .insert(exercise, 'id')
    .then(ids => {
      const [ id ] = ids;
      return fetchAll()
    })
}

function deleteExercise(id) {
  return db('exercises')
    .where({ id })
    .del()
    .then(() => fetchAll())
}

function fetchAll() {
  return db('exercises')
}

function fetchExerciseById(id) {
  return db('exercises').where({ id })
}

function fetchExercisesByWodId(id) {
  return db('wod-exercise').where({ workout_id: id })
}

function updateExercise(id, edits) {
  return db('exercises')
    .where({ id })
    .update({ name: edits.name })
    .then(() => {
      return
    })
}

module.exports = { 
  addExercise,
  deleteExercise,
  fetchAll,
  fetchExerciseById,
  fetchExercisesByWodId,
  updateExercise
}
