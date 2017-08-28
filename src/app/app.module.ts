import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TriviaFormComponent,
    TriviaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
