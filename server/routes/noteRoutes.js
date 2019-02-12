//routes.js
const express = require('express');
const router = express.Router();
const Notes = require('../../models/notesSchema');
const checkAuth = require('../../middleware/checkAuth');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../build/index.html'));
});

router.post("/insertnote", (req, res) => {
    let note = new Notes();
    note.title = req.body.title;
    note.description = req.body.description;
    note.pinned = req.body.pinned; 
 
    note.save().then((data)=> {
         res.sendStatus(200);
     })
    .catch(err => {
        res.status(400).send("unable to save to DB");
    });
 });

router.get('/getnotes', checkAuth, (req, res) => {
    Notes.find({}, (err, notes) => {
        if(err){
            res.send(err)
        }
        res.json(notes);
    });
});

router.put('/updatenote/:noteId', (req, res) => {
    Notes.updateMany(
        {"_id": req.params.noteId},
        {"$set": {"title": req.body.title, "description": req.body.description, "pinned": req.body.pinned}}, 
        (err) => {
            if(!err){
                res.sendStatus(200);
            }else{
                res.sendStatus(400);
            }

    });
});

router.delete('/deletenote/:noteId', (req, res) => {
    Notes.deleteOne({_id: req.params.noteId}, (err) => {
        if(!err){
            res.sendStatus(200);
        }else{
            res.sendStatus(400);
        }
    });
});

module.exports = router;