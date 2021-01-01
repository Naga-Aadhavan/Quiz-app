import { Component, OnInit } from '@angular/core';
import {ParticipantService} from 'src/app/participant.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public participantService:ParticipantService,private route:Router) { }

  ngOnInit(): void {
  }
  SignOut(){
    this.route.navigate(['/register']);
  }

}
