//notesSchema
const mongoose = require('mongoose');
const Schema = mongoose.schema;

const noteSchema = new Schema({
    description: string,
    title: string,
    updated: { type: Date, default: Date.now },
    pinned: Boolean
});

module.exports = mongoose.model('Notes', noteSchema);