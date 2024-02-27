const connection =require("../config/database")
const getAllUsers=async()=>{
 
    let [results,fields]=await connection.query(`SELECT* from Users`);

    return results
}
module.exports = {
    getAllUsers,
}