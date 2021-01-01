import { Injectable } from '@angular/core';
import{Participant} from 'src/app/models/participant';
//import { WebService } from './web.service';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  
  participantName:string;
  readonly baseURL = 'http://localhost:3000/participantadd';


  constructor(private http: HttpClient) { }

  postEmployee(emp: Participant) {
    return this.http.post(this.baseURL, emp);
  }
}
