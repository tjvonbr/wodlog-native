const db = require("../data/db-config");

/* Models for WODs */
function addWod(wod) {
  return db('wods')
    .insert(wod, 'id')
    .then(ids => {
      const [ id ] = ids;
      return findById(id)
    })
}

function fetchAll() {
  return db('wods')
}

function findById(id) {
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

module.exports = {
  addWod,
  fetchAll,
  findById,
  updateWod
}
