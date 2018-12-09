//routes.js
const express = require('express');
const router = express.Router();
const Notes = require('../../models/notesSchema');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../build/index.html'));
});

router.get('/api/getnotes', (req, res) => {
    Notes.find({}, (err, notes) => {
        if(err){
            res.send(err)
        }
        res.json(notes);
    });
});

router.post("/api/insertnote", (req, res) => {
   let note = new Notes();
   note.title = req.body.title;
   note.description = req.body.description;
   note.pinned = req.body.pinned; 

   note.save().then(item => {
        res.send("item saved to database")
    })
   .catch(err => {
       res.status(400).send("unable to save to DB");
   });
});

router.delete('/api/deletenote/:noteId', (req, res) => {
    console.log(req);
    Notes.remove({_id: req.params.noteId}, (err) => {
        if(!err){
            res.sendStatus(200);
        }else{
            res.sendStatus(400);
        }
    });
});

module.exports = router;