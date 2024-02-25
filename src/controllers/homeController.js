const connection=require('../config/database')
const getHomepage=(req,res)=>{
    res.send('Hello World Cuong')
}
const getABC=(req,res)=>{
    res.send('check ABC')
}
const getHoiDanIT=(req,res)=>{
    // res.send(`<h1> Hoi dan it </h1>`);
    res.render('sample.ejs');
}
module.exports={
    getHomepage,
    getABC,
    getHoiDanIT
}