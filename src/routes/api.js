const express = require('express');

const routerAPI=express.Router();
const {getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadFileSingleAPI,
    postUploadMultipleFilesAPI,
    
}
=require('../controllers/apiControllers')
const {postCustomerAPI} =require('../controllers/customerController')


routerAPI.get('/users',getUsersAPI);
routerAPI.post('/users',postCreateUserAPI);
routerAPI.put('/users',putUpdateUserAPI);
routerAPI.delete('/users',deleteUserAPI);


routerAPI.post('/file',postUploadFileSingleAPI);
routerAPI.post('/files',postUploadMultipleFilesAPI);

routerAPI.post('/customers',postCustomerAPI);

module.exports = routerAPI;