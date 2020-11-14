const db = require("../data/db-config");

module.exports = {
  addUser,
  findById,
  fetchAll
}

function addUser(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [ id ] = ids;
      return findById(id)
    })
}

function findById(id) {
  return db('users').where({ id }).first()
}

function fetchAll() {
  return db('users')
}