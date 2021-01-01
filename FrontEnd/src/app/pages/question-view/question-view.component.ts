import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Quizes from 'src/app/models/quizes';
import {DisplayService} from 'src/app/display.service';
//import { AppRoutingModule} from 'src/app/app-routing.module';
@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  

  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  questions : Quizes[]=[];
 // questionindex: Quizes;
  private qnProgress: number=0;
  private correctAnswerCount: number = 0;
  score:number=0;
  private loopLength:number;
  private answerDone :boolean=false;
  private correctAnswer:number=0;
  constructor(private router:Router,private displayService:DisplayService ) { }

  ngOnInit() {
     this.displayService.getQuestions()
        .subscribe((questions : Quizes[])=>this.questions=questions );

    this.loopLength=this.questions.length;
   
   

  }

  setLoopLength(){
    this.loopLength=this.questions.length;
  }
  getLoopLength(){
    return this.loopLength;
  }
  getQnProgress(){
    return this.qnProgress;
  }

  decreaseQnProgress(){
    this.qnProgress++;
    this.answerDone=false;
    this.correctAnswer=0;
    if(this.getQnProgress()==this.questions.length){
      this.displayService.mark=this.score;
      this.displayService.total=this.questions.length;

      this.router.navigate(['/result']);
  }
  }

  onClick(){
    this.decreaseQnProgress();
  }

  answered(answer : string){
    
    if(answer===this.questions[this.qnProgress].answer){
      this.score++;
      this.correctAnswer=1;
    }
    else{
      this.correctAnswer=2;
    }
    //this.onClick();
    //this.score++;
    //this.onClick();
    this.answerDone=true;

    if(this.getQnProgress()==this.questions.length){
        this.displayService.mark=this.score;
        this.displayService.total=this.questions.length;

        this.router.navigate(['/result']);
    }
    
  }

  

}

