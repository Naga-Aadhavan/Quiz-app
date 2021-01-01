import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionViewComponent } from './pages/question-view/question-view.component';
import { StartQuizComponent } from './pages/start-quiz/start-quiz.component';
import {appRoutes} from './routes';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    QuestionViewComponent,
    StartQuizComponent,
    NavbarComponent,
    RegisterComponent
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes ),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
