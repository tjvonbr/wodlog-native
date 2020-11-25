const db = require('../data/db-config');

// Models for exercises
function addExercise(exercise) {
  return db('exercises')
    .insert(exercise, 'id')
    .then(ids => {
      const [ id ] = ids;
      return fetchExerciseById(id)
    })
}

function deleteExercise(id) {
  return db('exercises')
    .where({ id })
    .del()
}

function fetchAll() {
  return db('exercises')
}

function fetchExerciseById(id) {
  return db('exercises')
    .where({ id })
    .first()
}

function fetchExercisesByWodId(id) {
  return db('wod-exercise').where({ workout_id: id })
}

function updateExercise(id, changes) {
  return db('exercises')
    .where({ id })
    .update({ name: changes.name })
    .then(count => {
      if (count > 0) {
        return fetchExerciseById(id)
      } else {
        return null
      }
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
