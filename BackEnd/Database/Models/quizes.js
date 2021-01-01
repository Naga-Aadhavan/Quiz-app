const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    question_no:Number,
    question: String,
    option1:String,
    option2: String,
    option3:String,
    option4: String,
    answer:String

});

const QuizQuestions = mongoose.model('QuizQuestions',QuizSchema);

module.exports = QuizQuestions;