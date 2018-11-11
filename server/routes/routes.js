//routes.js
const express = require('express');
const router = express.Router();
const Notes = require('../../models/notesSchema');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../build/index.html'));
});

module.exports = router;