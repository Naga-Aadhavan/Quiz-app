import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Participant} from 'src/app/models/participant';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  constructor(private http: HttpClient ) {
    this.ROOT_URL = "http://localhost:3000";
  }
  //participant: Participant;

  get(uri : String){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
 /* post(uri:string,par :Participant){
    return this.http.post(`${this.ROOT_URL}/${uri}`,par);
  }*/
}
