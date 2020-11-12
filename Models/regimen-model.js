const db = require("../db-config.js");

module.exports ={
    findByuserId,
    addregimen,
    updateRegimens,
    remove

};

function findByuserId(userId){
    return db("regimen as r")
    .where({userId})
    .join("exercises as e", "e.id", "r.exerciseId")
    .join("users as u", "u.id", "r.userId")
    .select("r.id as regimenID", "r.weight as regimenWeight", "r.name as regimenName", "*" )
     
}

function findById(id){
    return db("regimen").where({id})
     
}

function addregimen(regimens){
    return db("regimen").insert(regimens).returning("*")
}

async function updateRegimens(regimens, id){
    await db("regimen")
    .where({id})
    .update(regimens)
    return findById(id)
    
    
}

function remove(id){
    return db("regimen")
    .where({id})
    .del();
}