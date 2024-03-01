const express = require('express');

const routerAPI=express.Router();


routerAPI.get('/',getHomepage);


module.exports = routerAPI;