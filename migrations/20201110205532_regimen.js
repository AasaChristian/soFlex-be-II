
exports.up = function(knex) {
    return knex.schema.createTable("regimen", tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('link')
        tbl.integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.integer("exerciseId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercises")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.integer('sets')
        tbl.integer('reps')
        tbl.integer('weight')
        tbl.boolean('completion')
    })

  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("regimen")
  
};