const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    quiz_id : {
        type : mongoose.Types.ObjectId,
        required:true
    },
    answers :[String]

});

const Answers=mongoose.model('Answers',answerSchema);

module.exports = Answers;