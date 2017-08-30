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
  @Input() childTrivia;
  @Input() childCategory;
  constructor(private triviaAnswers: TriviaApiService, private trivia: TriviaService) { }

  saveTrivia(question, incorrect, correct, category, id) {
    // console.log(question);
    // console.log(incorrect);
    // console.log(correct);
    // console.log(category);
    this.triviaAnswers.saveTriviaObject(question, incorrect, correct, category, id);
    alert("this has been saved")
  }

  ngOnInit() {
  }

}
