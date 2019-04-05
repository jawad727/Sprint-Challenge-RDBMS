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
   getDishes,
   getDish,
   addDish,
   getRecipes,
   addRecipe,
   getRecipe
};

