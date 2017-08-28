import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TriviaApiService {

  constructor(private http: Http) { }

  getTriviaResults(category: number) {
    return this.http.get("https://opentdb.com/api.php?amount=1&category=" + category)
  }
}
