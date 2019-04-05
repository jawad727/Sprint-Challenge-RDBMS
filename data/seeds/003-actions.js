
exports.seed = function(knex, Promise) {
  return knex('actions').insert([
    { action_description: 'lorem psum', isCompleted: false, project_id: 1},
    { action_description: 'lorem psum', isCompleted: false, project_id: 2}
    ]);
 
 
 };
 
 
 