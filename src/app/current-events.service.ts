import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentEventsService {
articleDetails = null;

  constructor(private http: Http) { }

  getBySource(source: string) {
    return this.http.get('https://newsapi.org/v1/articles?source='+ source + '&apikey=54c70d579915400ebe7b9d7c36f6fb77');
  }

}
