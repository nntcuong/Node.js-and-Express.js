require('dotenv').config();

const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes=require('./routes/web');

const app = express();
const port = process.env.PORT || 3000; // Use a default port if not provided
const hostname = process.env.HOST_NAME || 'localhost'; // Use a default hostname if not provided
require('dotenv').config();


configViewEngine(app);
//khai bao router
app.use('/',webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
});
