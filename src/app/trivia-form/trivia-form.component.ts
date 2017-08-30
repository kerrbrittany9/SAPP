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
  choice = null; category = null;
  triviaGotten = false;
  triviaResult: any[];
  triviaList;

  constructor(private triviaAnswers: TriviaApiService, private triviaS: TriviaService) { }

  getTrivia(category) {
    this.triviaGotten = true;

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

    this.triviaAnswers.getTriviaResults(this.category).subscribe(response => {
      var triviaToDisplay: any[] = [];
      this.triviaResult = response.json().results;
      this.triviaResult.forEach(function(currentTrivia) {
        // console.log(currentTrivia.question.includes("&#039;"));
        // console.log(currentTrivia.question.includes("&quot;"));
        // console.log(currentTrivia);
        if (currentTrivia.question.includes("&uuml;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&uuml;/g, "ü");
        }
        if (currentTrivia.question.includes("&deg;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&deg;/g, "°");
        }
        if (currentTrivia.question.includes("&ldquo;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&ldquo;/g, '"');
        }
        if (currentTrivia.question.includes("&rdquo;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&rdquo;/g, '"');
        }
        if (currentTrivia.question.includes("&#039;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&#039;/g, "'");
        }
        if (currentTrivia.correct_answer.includes("&#039;") === true) {
          currentTrivia.correct_answer = currentTrivia.correct_answer.replace(/&#039;/g, "'");
        }
        if (currentTrivia.correct_answer.includes("&uuml;") === true) {
          currentTrivia.correct_answer = currentTrivia.correct_answer.replace(/&uuml;/g, "ü");
        }
        if (currentTrivia.question.includes("&quot;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&quot;/g, "'");
        }
        if (currentTrivia.question.includes("&lsquo;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&lsquo;/g, '"');
        }
        if (currentTrivia.question.includes("&rsquo;") === true) {
          currentTrivia.question = currentTrivia.question.replace(/&rsquo;/g, "'");
        }
        currentTrivia.incorrect_answers.forEach(function(incorrectAnswer) {
          console.log(incorrectAnswer.includes("&eacute;"));
          if (incorrectAnswer.includes("&prime;") === true) {
            incorrectAnswer.replace(/&prime;/g, "'");
          }
          if (incorrectAnswer.includes("&Prime;") === true) {
            incorrectAnswer.replace(/&Prime;/g, '"');
          }
          if (incorrectAnswer.includes("&#039;") === true) {
            incorrectAnswer.replace(/&#039;/g, "'");
          }
          if (incorrectAnswer.includes("&quot;") === true) {
            incorrectAnswer.replace(/&quot;/g, '"');
          }
          if (incorrectAnswer.includes("&eacute;") === true) {
            console.log("é");
            incorrectAnswer.replace(/&eacute;/g, 'E');
          }
          if (incorrectAnswer.includes("&ocirc;") === true) {
            incorrectAnswer.replace(/&ocirc;/g, 'ô');
          }

        })
        triviaToDisplay.push(currentTrivia);
      });
      console.log(triviaToDisplay[0]);
      this.triviaList = triviaToDisplay;
    });

  }


  ngOnInit() {

  }

}
