//server.js
const express = require('express');
const path = require('path');
const router = require('./routes/routes.js')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

//tells express frontend will reside in client folder
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongoDB
mongoose.connect(`mongodb://${DBUSER}:${DBPASSWORD}@ds141812.mlab.com:41812/note_app_db`, { useNewUrlParser: true });

let conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection:'));
conn.once('open', () => {
    console.log('connected to database');
});

//pass in routes from router const
app.use('/',router)

module.exports=app;