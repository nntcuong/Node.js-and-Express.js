const express = require('express');

const routerAPI=express.Router();
const {getUsersAPI}=require('../controllers/apiControllers')

routerAPI.get('/',(req,res)=>{
    res.send("Hello world with apis")
});
routerAPI.get('/abc',(req,res)=>{
    res.status(200).json({
        data: 'Hello with api'
    })
});
routerAPI.get('/users',getUsersAPI);

module.exports = routerAPI;