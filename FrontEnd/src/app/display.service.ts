import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  mark:number;
  total:number;

  constructor( private webService: WebService) { }

  getQuestions(){
    return this.webService.get('quizes');
  }

  showResult(uri :string){
   // this.webService.
  }

}
