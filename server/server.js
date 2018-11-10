const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const router = require('./routes/routes.js')
const app = express();

//tells express frontend will reside in client folder
app.use(express.static(path.join(__dirname, '../client')));

//pass in routes from router const
// app.use('/',router)

//fall back to original route
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname + '../client/index.html'));
});

//listening on port
app.listen(port);
console.log('server started');
