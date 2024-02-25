const connection=require('../config/database')
const getHomepage=(req,res)=>{
    return res.render('home.ejs')
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