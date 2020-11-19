const db = require("../data/db-config");

/* Models for WODs */
const addWod = wod => {
  return db('wods')
    .insert(wod, 'id')
    .then(ids => {
      const [ id ] = ids;
      return findById(id)
    })
}

const fetchAll = () => {
  return db('wods')
}

const findById = id => {
  return db('wods').where({ id }).first()
}

const updateWod = (id, changes) => {
  return db('wods')
    .where({ id })
    .update({ 
      name: changes.name,
      description: changes.description 
    })
}

/*
  The section below is specifically for the exercises
  associated with a particular WOD

  TODO
  Need to come back to finish these models for
  the wod_exercise table!!!
*/
// const addExercise = (id, exercise) => {
//   return db('wod_exercise')
//     .insert(exercise)
//       .then(ids => {
//         const [ id ] = ids;
//         return findById(id)
//       })
// }

// const fetchExercisesForWod = () => {
//   return db('wod_exercise')
// }


module.exports = {
  addWod,
  fetchAll,
  findById,
  updateWod
}
