//notesSchema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    description: String,
    title: String,
    updated: { type: Date, default: Date.now },
    pinned: Boolean
});

module.exports = mongoose.model('Notes', noteSchema);