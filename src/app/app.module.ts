import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { masterGoogleBooksConfig } from './api-key-google';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
<<<<<<< HEAD
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';
=======
import { LiteratureComponent } from './literature/literature.component';

export const googleBooksConfig = {
  apiKey: masterGoogleBooksConfig.apiKey,
}

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
>>>>>>> f72dd9984254cd422b7b8e9348a20c7273041996

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
<<<<<<< HEAD
    TriviaFormComponent,
    TriviaListComponent
=======
    LiteratureComponent
>>>>>>> f72dd9984254cd422b7b8e9348a20c7273041996
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
