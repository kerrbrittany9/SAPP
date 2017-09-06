import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Trivia } from './trivia.model';
import { TriviaService } from './trivia.service';
import swal  from 'sweetalert2';

@Injectable()
export class TriviaApiService {

  constructor(private http: Http, private triviaService: TriviaService) { }

  getTriviaResults(category) {
    return this.http.get("https://opentdb.com/api.php?amount=1&category=" + category);
  }

  saveTriviaObject(question: string, incorrect: string, correct: string, category: string, id: string) {
    return this.http.get("https://opentdb.com/api.php?amount=1&category=" + category)
    .subscribe(response => {
      let foundTrivia: Trivia;
      var id = question + " " + correct;

      foundTrivia = new Trivia(question, incorrect, correct, category, id);
      // console.log(foundTrivia);
      this.triviaService.addTrivia(foundTrivia);
      swal('Congrats!', "This bit of trivia has been saved!", 'success');
    });
  }
}
