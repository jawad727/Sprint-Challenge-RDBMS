
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { action_description: 'lorem psum', isCompleted: false},
    { action_description: 'lorem psum', isCompleted: false}
    ]);
 
 
 };
 
 
 