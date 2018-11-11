//server.js
const express = require('express');
const path = require('path');
const router = require('./routes/routes.js')
const app = express();
const mongoose = require('mongoose');
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

//tells express frontend will reside in client folder
app.use(express.static(path.join(__dirname, '../build')));

//connect to mongoDB
mongoose.connect(`mongodb://${DBUSER}:${DBPASSWORD}@ds141812.mlab.com:41812/note_app_db`);

//pass in routes from router const
app.use('/',router)

module.exports=app;