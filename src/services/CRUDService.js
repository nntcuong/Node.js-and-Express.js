const connection =require("../config/database")
const getAllUsers=async()=>{
 
    let [results,fields]=await connection.query(`SELECT* from Users`);

    return results
}
const updateUserById = async (email, city, name, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET email=?, city=?, name=?
        WHERE id= ?`,
        [email, city, name, userId]
    );
}
const getUserById=async(userId)=>{
 
    let [results, fields] = await connection.query('select * from Users where id= ? ', [userId])
    return results;
}

module.exports = {
    getAllUsers,
    updateUserById,
    getUserById
}