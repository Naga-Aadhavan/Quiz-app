import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import {DisplayService} from 'src/app/display.service';
import {ParticipantService} from 'src/app/participant.service';
@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  markObtained:number;
  totalMark:number;
  constructor(private displayService:DisplayService,public participantService:ParticipantService) { }

  ngOnInit(){
    this.markObtained=this.displayService.mark;
    this.totalMark=this.displayService.total;
    
  }

}
