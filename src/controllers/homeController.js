const connection = require('../config/database')
const { getAllUsers, updateUserById,getUserById } = require('../services/CRUDService')
const User=require("../models/user")
const getHomepage = async (req, res) => {
    let results =await User.find({});
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
    // let [results, fields] = await connection.query(
    //     `  INSERT INTO Users(email,name,city)
    //         VALUES (?,?,?)`,
    //     [email, name, city],
    // );

    // console.log(results)
    await User.create({email:email, name:name, city:city});
    res.redirect('/')
}
const getCreateUser = (req, res) => {
    res.render('create.ejs')

}
const getUpdateUser = async (req, res) => {
    const userId = req.params.id;
    // let user=await getUserById(userId);

   let user= await User.findById(userId).exec();
    
    res.render('edit.ejs', { user: user })


}


const postUpdateUser = async (req, res) => {
    console.log("req ==>", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    await User.updateOne({_id:userId},{name:name,email:email,city:city});
    // await updateUserById(email, city, name, userId);
    res.redirect('/')
}

const postDeleteUser =async  (req, res) => {
    const userId = req.params.id;
    let user= await User.findById(userId).exec();
    res.render('delete.ejs', { user: user })
}
const postRemoveUser=async ( req, res) => {
    const id=req.body.userId
    // let [results, fields] = await connection.query(
    //     `  DELETE FROM Users WHERE id= ?`,
    //     [id],
    // );
    await User.deleteOne({
        _id: id
    })
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