import{ Routes} from '@angular/router';
import { from } from 'rxjs';
import { RegisterComponent } from './pages/register/register.component';
import {StartQuizComponent } from './pages/start-quiz/start-quiz.component';
import {QuestionViewComponent } from './pages/question-view/question-view.component';
import { AuthGuard } from './auth/auth.guard';
export const appRoutes : Routes =[
    {path:'register',component:RegisterComponent},
    {path:'quiz',component:QuestionViewComponent,canActivate:[AuthGuard]},
    {path: 'result', component:StartQuizComponent ,canActivate:[AuthGuard] },
    {path:'',redirectTo:'/register',pathMatch :'full'}

];