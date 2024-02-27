const connection = require('../config/database')
const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getABC = (req, res) => {
    res.send('check ABC')
}
const getHoiDanIT = (req, res) => {
    // res.send(`<h1> Hoi dan it </h1>`);
    res.render('sample.ejs');
}
const postCreateUser = (req, res) => {
    console.log("req ==>", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(email, name, city);

    connection.query(
        `  INSERT INTO Users(email,name,city)
        VALUES (?,?,?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            req.send('Create user succeed!')
        }
    )

}
const getCreateUser = (req, res) => {
    res.render('create.ejs')

}
module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    postCreateUser,
    getCreateUser
}