import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CurrentEvent } from './current-event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CurrentEventsService {
currentEvent: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFireDatabase) {
    this.currentEvent = af.list('currentEvents');
  }

  addCurrentEvent(newCurrentEvent: CurrentEvent) {
    console.log(newCurrentEvent);
    this.currentEvent.push(newCurrentEvent);
  }

  getCurrentEvents() {
    return this.currentEvent;
  }

  // getCurrentEvents() {
  //   return this.currentEvent;
  // }
}
