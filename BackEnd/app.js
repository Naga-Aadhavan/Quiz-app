const express = require('express');
const cors= require('cors');
const app=express();
const router= express.Router();
const mongoose=require('./Database/mongoose');

//const Quizes = require('./Database/Models/quizes');
const QuizQuestions = require('./Database/Models/quizes');
const Participant = require('./Database/Models/participant');

app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  } );

app.get('/quizes',(req,res) => {
  QuizQuestions.find({})
    .then(quizes=> res.send(quizes))
    .catch((error) => console.log(error))

});

app.post('/quizes',(req,res)=>{
  //(new Quizes({ 'quizname':req.body.quizname,'questions':req.body.questions}))
  (new QuizQuestions({ 'question_no': req.body.question_no,
      'question':req.body.question,
        'option1':req.body.option1,
        'option2':req.body.option2,
        'option3':req.body.option3,
        'option4':req.body.option4,
        'answer':req.body.answer  }))
    .save()
    .then(quizes=>res.send(quizes))
    .catch((error)=>console.log(error))


});

/*app.post('/participantadd',(req,res)=>{
  //(new Quizes({ 'quizname':req.body.quizname,'questions':req.body.questions}))
  (new Participant({ 'name': req.body.name,
      'score':req.body.score
          }))
    .save()
    .then(participatadd=>res.send(participatadd))
    .catch((error)=>console.log(error))
});*/

app.post('/participantadd', (req, res) => {
  var emp = new Participant({
      name: req.body.name,
      score: req.body.score
  });
  emp.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
  });
});



app.listen(3000,()=>{console.log("Server connected to port 3000")});