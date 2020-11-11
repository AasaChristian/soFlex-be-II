
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.string('username').notNullable();
        tbl.string('password').notNullable();
        tbl.string('emailAddress');
        tbl.binary('avi', 1000000);
        tbl.float('height')
        tbl.float('weight')
        tbl.float('age')
        tbl.string('sex');
        
    })

  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
  
};