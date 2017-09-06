import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CurrentEvent } from './current-event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EventService } from './event.service';


@Injectable()
export class CurrentEventsService {
  currentEvent: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  currentEventToDelete;
  
  constructor(
    private http: Http,
    private af: AngularFireDatabase,
    private eventService: EventService
  ) {
    this.currentEvent = af.list('currentEvents');
  }

  addCurrentEvent(newCurrentEvent: CurrentEvent) {
    this.currentEvent.push(newCurrentEvent);
  }

  getCurrentEvents() {
    return this.currentEvent;
  }

  getCurrentEventById(id: string) {
    return this.af.object('/currentEvents/' + id);
  }

  getEventConvo(eventKey: string, convoIndex: number) {
    return this.af.object('/events/' + eventKey + '/conversations/' + convoIndex);
  }

  deleteCurrentEvent(localCurrentEventToDelete) {
    this.getCurrentEventById(localCurrentEventToDelete.$key).subscribe(currentEvents => {
      this.currentEventToDelete = currentEvents.id;
      this.events = this.eventService.getEvents();
      this.events.subscribe(events => {
        events.forEach(event => {
          for (var i = 0; i < event.conversations.length; i++) {
            var targetConvo = this.getEventConvo(event.$key, i);

            this.getEventConvo(event.$key, i).subscribe(convo => {
              console.log(event.$key);
              console.log(this.currentEventToDelete);
              if (convo.$value === this.currentEventToDelete) {
                console.log("condition met!");
                targetConvo.remove();
              }
            });
          }

        })
      })
    });
    this.getCurrentEventById(localCurrentEventToDelete.$key).remove();
  }
}
