const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    
    name: String,
    score:Number

});

const Participant = mongoose.model('Participant',ParticipantSchema);

module.exports = Participant;