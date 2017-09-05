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

  constructor(private af: AngularFireDatabase) {
    this.events = af.list('events');
  }

  getEvents() {
    return this.events;
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

  // checkForEventConvos(event) {
  //   event.conversations = event.conversations !== undefined ? event.conversations : [];
  // }

  // getTriviaConvosOfEventById(id: string) {
  //   return this.af.object('trivia/' + id);
  // }
  //
  // getBookConvosOfEventById(id: string) {
  //   return this.af.object('bookConversations/' + id);
  // }
  //
  // getEventConversationsByEventName(eventName: string) {
  //   var eventConvos = this.getEventByName(eventName);
  //   eventConvos.forEach(function(convoId: string) {
  //     var triviaConvos = this.getTriviaConvosOfEventById(convoId);
  //     var bookConvos = this.getBookConvosOfEventById(convoId);
  //   });
  // }

  getEventByName(eventName: string) {
    return this.af.object('events/' + eventName);
  }

  saveTriviaToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    // this.checkForEventConvos(eventEntryInFirebase);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
  }

  saveBookToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
  }

  saveCurrentEventToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
  }

  saveCityToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
    alert("Your city notes have been saved to " + localEditedEvent.name + "!");
  }
}
