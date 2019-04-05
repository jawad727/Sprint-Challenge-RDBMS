
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {project_name: 'PROJECT1', description: 'lorem psum', isCompleted: false},
    {project_name: 'PROJECT2', description: 'lorem psum', isCompleted: false}
    ]);
 
 
 };
 
 
 