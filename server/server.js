//server.js
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');

require('dotenv').config();
const DBUSER = process.env.REACT_APP_DBUSER;
const DBPASSWORD = process.env.REACT_APP_DBPASSWORD;

//tells express frontend will reside in client folder
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

//connect to mongoDB
mongoose.connect(`mongodb://${DBUSER}:${DBPASSWORD}@ds141812.mlab.com:41812/note_app_db`, { useNewUrlParser: true });

let conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection:'));
conn.once('open', () => {
    console.log('connected to database');
});

//pass in routes from router const
app.use('/api/notes',noteRouter);
app.use('/api/users', userRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports=app;