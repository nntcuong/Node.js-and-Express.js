const express = require('express');

const routerAPI=express.Router();
const {getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadFileSingleAPI
}
=require('../controllers/apiControllers')



routerAPI.get('/users',getUsersAPI);
routerAPI.post('/users',postCreateUserAPI);
routerAPI.put('/users',putUpdateUserAPI);
routerAPI.delete('/users',deleteUserAPI);
routerAPI.post('/file',postUploadFileSingleAPI);
module.exports = routerAPI;