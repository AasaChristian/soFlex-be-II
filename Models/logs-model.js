const db = require("../db-config.js");

module.exports ={
    findByuserId,
    addLog
};

function findByuserId(userId){
    return db("logs")
    .where("logs.userId", userId)
    .join("regimen", "regimen.id", "logs.regimenId")
    .join("users as u", "u.id", "logs.userId")
    .select("regimen.id as regimenID", "regimen.weight as regimenWeight", "regimen.name as regimenName", "logs.weight as Loggedweight", "logs.reps as LoggedReps","*" ) 
}

function addLog(log){
    return db("logs").insert(log).returning("*")
}