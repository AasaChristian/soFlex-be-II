const db = require("../db-config");

module.exports ={
    findByUserName,
    addUser,

};

function findByUserName(username){

    const log = db("users").where({username}).returning("*")
    return log
}

function addUser(user){
    return db("users").insert(user).returning("*")
    

}
