import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CurrentEventsService {

  constructor(private http: Http) { }

  getNews(stringToCall: string) {
    return this.http.get(stringToCall);
  }
}
