import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Event } from './event.model';
import { Trivia} from './trivia.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import swal  from 'sweetalert2';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;
  eventName: string;

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

  // getEventConvo(targetEvent, convo) {
  //   return this.af.list('events/' + targetEvent.$key + '/conversations/' + convo.$key);
  // }

  deleteConvoFromEvent(localTargetEvent, convoId) {
    this.af.object('events/' + localTargetEvent.$key + '/conversations/' + 5).remove();
    this.af.object('events/' + localTargetEvent.$key + '/conversations/' + convoId).subscribe(response => {
    })
  }

  saveTriviaToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
    swal('Congrats!', "Your bit of trivia has been saved to " + localEditedEvent.name + "!", 'success');
  }

  saveBookToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
    swal('Congrats!', "Your book info has been saved to " + localEditedEvent.name + "!", 'success');
  }

  saveCurrentEventToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
    swal('Congrats!', "This news event has been saved to " + localEditedEvent.name + "!", 'success');
  }

  saveCityToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
    swal('Congrats!', "Your city notes have been saved to " + localEditedEvent.name + "!", 'success');
  }
}
