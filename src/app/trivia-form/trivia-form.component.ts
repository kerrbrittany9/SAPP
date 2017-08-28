import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TriviaApiService } from '../trivia-api.service';

@Component({
  selector: 'app-trivia-form',
  templateUrl: './trivia-form.component.html',
  styleUrls: ['./trivia-form.component.css'],
  providers: [ TriviaApiService ]
})
export class TriviaFormComponent implements OnInit {
  trivia: any[];

  constructor(private triviaAnswers: TriviaApiService) { }

  getTrivia(amount: number) {
    console.log(amount);
    this.triviaAnswers.getTriviaResults(amount).subscribe(response => {
      this.trivia = response.json();
        // console.log(response.json);
              console.log(this.trivia);
    });
  }

  ngOnInit() {

  }

}
