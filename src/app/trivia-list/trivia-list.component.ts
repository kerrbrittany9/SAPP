import { Component, OnInit, Input } from '@angular/core';
import { TriviaApiService } from '../trivia-api.service';
import { Trivia } from '../trivia.model';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-trivia-list',
  templateUrl: './trivia-list.component.html',
  styleUrls: ['./trivia-list.component.css'],
  providers: [ TriviaApiService, TriviaService ]
})
export class TriviaListComponent implements OnInit {
  @Input() childChoice;
  @Input() childCategory;
  @Input() childTriviaList;
  // triviaResult: any[];
  // triviaList;

  constructor(private triviaAnswers: TriviaApiService, private triviaService: TriviaService) { }

  saveTrivia(question, incorrect, correct, category) {
    // console.log(question);
    // console.log(incorrect);
    // console.log(correct);
    // console.log(category);
    this.triviaAnswers.saveTriviaObject(question, incorrect, correct, category);
    alert("this has been saved");
  }

  ngOnInit() {
    // this.triviaAnswers.getTriviaResults(this.childCategory).subscribe(response => {
    //   var triviaToDisplay: any[] = [];
    //   this.triviaResult = response.json().results;
    //   this.triviaResult.forEach(function(currentTrivia) {
    //     // console.log(currentTrivia.question.includes("&#039;"));
    //     // console.log(currentTrivia.question.includes("&quot;"));
    //     // console.log(currentTrivia);
    //     if (currentTrivia.question.includes("&#039;") === true) {
    //       currentTrivia.question = currentTrivia.question.replace(/&#039;/g, "'");
    //     } else if (currentTrivia.question.includes("&quot;") === true) {
    //       currentTrivia.question = currentTrivia.question.replace(/&quot;/g, "'");
    //     } else if (currentTrivia.question.includes("&lsquo;") === true) {
    //       currentTrivia.question = currentTrivia.question.replace(/&lsquo;/g, '"');
    //     }
    //     triviaToDisplay.push(currentTrivia);
    //   });
    //   console.log(triviaToDisplay[0]);
    //   this.triviaList = triviaToDisplay;
    // });
  }

}
