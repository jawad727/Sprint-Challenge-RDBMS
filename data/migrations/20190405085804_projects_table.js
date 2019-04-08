
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable()
      tbl.string('description', 200).notNullable()
      tbl.boolean('isCompleted').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
