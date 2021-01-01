import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Participant} from 'src/app/models/participant';
import {Router} from '@angular/router';
import {ParticipantService} from 'src/app/participant.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
   
  

  constructor(public participantService:ParticipantService, private route:Router) { }

  ngOnInit(): void {
  }

 /* OnSubmit(form: NgForm) {
    this.participantService.participantName=form.value.Name;
      //this.par.name=form.value.Name;
    //  this.par.score=0;

    //  this.participantService.postEmployee(this.par);
    //  console.log(form.value);
     this.route.navigate(['/quiz']);
    
  }*/

    OnSubmit() {
    this.participantService.participantName=(<HTMLInputElement>document.getElementById('txt_name')).value; 
      //this.par.name=form.value.Name;
    //  this.par.score=0;

    //  this.participantService.postEmployee(this.par);
    //  console.log(form.value);
     this.route.navigate(['/quiz']); }


 /* OnSubmit(form: NgForm) {

      this.participantService.postEmployee(form.value)//.subscribe((res) => {
     
  }*/
}
