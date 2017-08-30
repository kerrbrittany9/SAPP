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
  triviaResult: any[];

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
    this.triviaAnswers.getTriviaResults(this.childCategory).subscribe(response => {
      this.triviaResult = response.json().results;
      console.log(this.childChoice);
      console.log(this.triviaResult);
    });
  }

}
