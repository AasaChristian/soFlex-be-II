
exports.up = function(knex) {
    return knex.schema.createTable("logs", tbl => {
        tbl.increments();
        tbl.string('type').notNullable();
        tbl.integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.integer("regimenId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("regimen")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.integer('set')
        tbl.integer('reps')
        tbl.integer('weight')
        tbl.string('post')
        tbl.binary('img', 1000000);
        tbl.timestamp("dateAdded", 20).defaultTo(knex.fn.now());
    })

  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("logs")
  
};