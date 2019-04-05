const knex = require('knex')

const knexConfig =require('../knexfile.js')

const db = knex(knexConfig.development);

module.exports = {
    addProjects,
    addActions,
    getById,
    getActionById
};

function getActionById(id) {
  return db('actions').where({ project_id: id }) //sends back array
}

function getById(id) {
    return db('projects').where({ id }).first()
}


function addProjects(proj) {
    return db('projects')
      .insert(proj)
      .then(ids => {
        return getById(ids[0]);
      });
  }

  
function addActions(actions) {
    return db('actions')
      .insert(actions)
      .then(ids => {
        return getById(ids[0]);
      });
  }

