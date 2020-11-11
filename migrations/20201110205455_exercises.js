
exports.up = function(knex) {
    return knex.schema.createTable("exercises", tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description').notNullable();
        tbl.binary('img', 1000000);

        
    })

  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("exercises")
  
};