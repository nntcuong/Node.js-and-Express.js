
const mysql = require('mysql2/promise');
require('dotenv').config();
// const connection =mysql.createConnection({
//     host: process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
const connection =async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/test').
    catch(error => handleError(error));
 
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  } catch (error) {
    handleError(error);
  }
}
module.exports = connection;