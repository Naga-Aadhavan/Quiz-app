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
  private qnProgress: number=1;
  private correctAnswerCount: number = 0;
  score:number=0;
  private loopLength:number;
  private answerDone :boolean=false;
  private correctAnswer:number=0;
  private nextQn:number=0;
  //private arr:Array<number>(10).fill(0);
  private arr:Number[]=[this.questions.length];
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

  randomInteger(min :number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  increaseQnProgress(){
   /* for(var i=0;i<this.questions.length;i++){
      this.arr[i]=0;
    }*/
    this.arr[0]=1;  
    while(true){
     var num:number=this.randomInteger(1,this.questions.length);
     if(this.arr[num]!=1){
       this.arr[num]=1;
       this.nextQn=num-1;
       break;
     }

    }
    this.qnProgress++;
    this.answerDone=false;
    this.correctAnswer=0;
    if(this.getQnProgress()==11){
      this.displayService.mark=this.score;
      this.displayService.total=10;

      this.router.navigate(['/result']);
  }
  }

  onClick(){
    this.increaseQnProgress();
  }

  answered(answer : string){
    
    if(answer===this.questions[this.nextQn].answer){
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

    if(this.getQnProgress()==10){
        this.displayService.mark=this.score;
        this.displayService.total=this.qnProgress-1;

        this.router.navigate(['/result']);
    }
    
  }

  

}

