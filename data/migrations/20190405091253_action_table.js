
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl.increments()
        tbl.string('action_description', 200).notNullable()
        tbl.string('notes', 200)
        tbl.boolean('isCompleted').notNullable()
        
        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };
  