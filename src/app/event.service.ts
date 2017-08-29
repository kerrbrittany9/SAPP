import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Event } from './event.model';
import { Trivia} from './trivia.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;
  eventName: string;
  eventToUse: Event;

  constructor(private af: AngularFireDatabase) {
    this.events = af.list('events');
  }

  getEvents() {
    return this.events;
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

  getEventByName(eventName: string) {
    return this.af.object('events/' + eventName);
  }

  addTrivia(triviaId: string) {
    // var eventEntryInFirebase = this.getEventByName()
  }

  // saveTriviaToEvent(selectedEventName, trivia: Trivia) {
  //   this.events.forEach(function(currentEvent) {
  //     if (currentEvent['name'] === selectedEventName) {
  //     }
  //   });
  // }

}
