import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CurrentEvent } from './current-event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CurrentEventsService {
currentEvent: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) { }

  addCurrentEvent(newCurrentEvent: CurrentEvent) {
    this.currentEvent.push(newCurrentEvent);
  }

  getCurrentEvents(source) {
    return this.currentEvent;
  }

  // getCurrentEvents() {
  //   return this.currentEvent;
  // }
}
