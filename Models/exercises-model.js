const db = require("../db-config.js");

module.exports ={
    getAll,
    findById,
    addExercise,
    updateExercise,
    remove

};

function getAll(){
    return db("exercises").select("*").orderBy('name')
     
}
function findById(id){
    return db("exercises").where({id}).first()
     
}

function addExercise(exercise){
    return db("exercises").insert(exercise).returning("*")
}

async function updateExercise(exercise, id){
    await db("exercises")
    .where({id})
    .update(exercise)
    return findById(id)
    
    
}

function remove(id){
    return db("exercises")
    .where({id})
    .del();
}