//server.js
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const router = require('./routes/routes.js')
const app = express();

//tells express frontend will reside in client folder
app.use(express.static(path.join(__dirname, '../build')));

//pass in routes from router const
app.use('/',router)

module.exports=app;