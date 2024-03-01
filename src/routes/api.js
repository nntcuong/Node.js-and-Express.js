const express = require('express');

const routerAPI=express.Router();


routerAPI.get('/',(req,res)=>{
    res.send("Hello world with apis")
});


module.exports = routerAPI;