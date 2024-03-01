const connection = require('../config/database')
const { getAllUsers, updateUserById,getUserById } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    let results =[];
    return res.render('home.ejs', { listUsers: results });
}
const getABC = (req, res) => {
    res.send('check ABC')
}
const getHoiDanIT = (req, res) => {
    // res.send(`<h1> Hoi dan it </h1>`);
    res.render('sample.ejs');
}
const postCreateUser = async (req, res) => {
    console.log("req ==>", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(email, name, city);
    let [results, fields] = await connection.query(
        `  INSERT INTO Users(email,name,city)
            VALUES (?,?,?)`,
        [email, name, city],
    );

    console.log(results)
    res.send('Create user succeed!')
}
const getCreateUser = (req, res) => {
    res.render('create.ejs')

}
const getUpdateUser = async (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('select * from Users where id= ? ', [userId])

    console.log(results)
    let user = results && results.length > 0 ? results[0] : {};
    res.render('edit.ejs', { user: user })


}


const postUpdateUser = async (req, res) => {
    console.log("req ==>", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    // let [results, fields] = await connection.query(
    //     `UPDATE Users
    //     SET email=?, city=?, name=?
    //     WHERE id= ?`,
    //     [email, city, name, userId]
    // );
    await updateUserById(email, city, name, userId);
    res.redirect('/')
}

const postDeleteUser =async  (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('select * from Users where id= ? ', [userId])
    let user = results && results.length > 0 ? results[0] : {};
    res.render('delete.ejs', { user: user })
}
const postRemoveUser=async ( req, res) => {
    const id=req.body.userId
    let [results, fields] = await connection.query(
        `  DELETE FROM Users WHERE id= ?`,
        [id],
    );
    res.redirect('/')
}
module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postRemoveUser
}