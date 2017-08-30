import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TriviaApiService } from '../trivia-api.service';
import { TriviaService } from '../trivia.service';
import { Trivia } from '../trivia.model';

@Component({
  selector: 'app-trivia-form',
  templateUrl: './trivia-form.component.html',
  styleUrls: ['./trivia-form.component.css'],
  providers: [ TriviaApiService, TriviaService ]
})
export class TriviaFormComponent implements OnInit {
  choice = null;
  triviaGotten = false;
  category = null;

  constructor(private triviaAnswers: TriviaApiService, private triviaS: TriviaService) { }

  getTrivia(category) {
    if (category == 26) {
      this.choice = "celebrities";
      this.category = 26;
    } else if (category == 11){
      this.choice = "film";
      this.category = 11;
    } else if (category == 14) {
      this.choice = "television";
      this.category = 14;
    } else if (category == 12) {
      this.choice = "music";
      this.category = 12;
    } else if (category == 25) {
      this.choice = "art";
      this.category = 25;
    } else if (category == 30) {
      this.choice = "science gadgets";
      this.category = 30;
    } else {
      this.choice = "sports";
      this.category = 21;
    }
    this.triviaGotten = true;

    // this.trivia.forEach(function(currentTrivia) {
    //   var question = currentTrivia.question;
    //   var incorrectAs = currentTrivia.incorrect_answers;
    //   var correctA = currentTrivia.correct_answer;
    //
    //   var newTrivia = new Trivia(question, incorrectAs, correctA, this.choice);
    //
    //   if (newTrivia.question.includes("&quot;") === true) {
    //     newTrivia.question.replace("&quot;", "'");
    //   }
    // });
  }


  ngOnInit() {

  }

}
