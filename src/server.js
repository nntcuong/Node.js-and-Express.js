require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes=require('./routes/api');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT || 3000; // Use a default port if not provided
const hostname = process.env.HOST_NAME || 'localhost'; // Use a default hostname if not provided
const Kitten = require('./models/Kitten');
const fileUpload = require('express-fileupload');
//test connection

//config file
app.use(fileUpload());

configViewEngine(app);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//khai bao router
app.use('/', webRoutes);
app.use('/v1/api',apiRoutes);
//shapedatata

// const cat = new Kitten({ name: 'Silence' });
// cat.save();



(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on http://${hostname}:${port}`);
        });
    } catch (error) {
        console.log("Error connect to DB: ", error);
    }
})();