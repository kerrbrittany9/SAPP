import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TriviaApiService } from '../trivia-api.service';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-trivia-form',
  templateUrl: './trivia-form.component.html',
  styleUrls: ['./trivia-form.component.css'],
  providers: [ TriviaApiService, TriviaService ]
})
export class TriviaFormComponent implements OnInit {
  trivia: any[];
  choice = null;

  constructor(private triviaAnswers: TriviaApiService, private triviaS: TriviaService) { }

  getTrivia(category: number) {
    this.triviaAnswers.getTriviaResults(category).subscribe(response => {
      this.trivia = response.json();
      if (category == 26) {
        this.choice = "celebrities";
      } else if (category == 11){
        this.choice = "film";
      } else if (category == 14) {
        this.choice = "television";
      } else if (category == 12) {
        this.choice = "music";
      } else if (category == 25) {
        this.choice = "art";
      } else if (category == 30) {
        this.choice = "science gadgets";
      } else {
        this.choice = "sports";
      }
    });
  }

  ngOnInit() {

  }

}
