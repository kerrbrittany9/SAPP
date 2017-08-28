import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LiteratureService {

  constructor(private http: Http) { }

  getLiteratureData(stringToCall: string) {
    console.log(stringToCall);
    return this.http.get(stringToCall);
  }
}
