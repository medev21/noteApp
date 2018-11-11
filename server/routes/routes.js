//routes.js
const express = require('express');
const router = express.Router();
const Notes = require('../../models/notesSchema');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../build/index.html'));
});

router.post("/insert", (req, res) => {
   let note = new Notes();
   note.title = req.body.title;
   note.description = req.body.description;
   note.pinned = false; 
});

module.exports = router;