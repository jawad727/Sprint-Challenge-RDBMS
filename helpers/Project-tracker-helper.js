const knex = require('knex')

const knexConfig = {
   client: 'sqlite3',
   connection: {
       filename: './data/projectTracker.sqlite3'
   },
   useNullAsDefault: true
};

const db = knex(knexConfig);

module.exports = {
    addProjects,
    addActions,
    getById,
    get
};

function get() {
  return db('actions')
}

function getById(id) {
    return db('projects', 'actions')
    .where({ id })
    .first()
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

