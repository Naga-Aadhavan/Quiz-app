import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionViewComponent } from './pages/question-view/question-view.component';
import { StartQuizComponent } from './pages/start-quiz/start-quiz.component';

export const routes: Routes = [
 // {path:'',component:QuestionViewComponent},
 // {path:'result' , component : StartQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
