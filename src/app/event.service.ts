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

  getEventConvos(targetEvent) {
    var convosArr = [];
    var eventEntryInFirebase = this.getEventByName(targetEvent.$key);
    eventEntryInFirebase.subscribe(event => {
      event.conversations.forEach(convo => {
        convosArr.push(convo);
      });
    })
    return convosArr;
  }

  deleteConvoFromEvent(localTargetEvent, convoId) {
    var eventEntryInFirebase = this.getEventByName(localTargetEvent.$key);
    eventEntryInFirebase.subscribe(event => {
      event.conversations.forEach(convo => {
        if (convo === convoId) {
          console.log("conditional in service method met!");
          convo.remove();
          //we need to mimic other module's methods for deletion (look at literatureService with getBOokById and deleteBook);
        }
      });
    });
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
    alert("Your bit of trivia has been saved to " + localEditedEvent.name + "!");
  }

  saveBookToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
    alert("Your book info has been saved to " + localEditedEvent.name);
  }

  saveCurrentEventToEvent(localEditedEvent) {
    var eventEntryInFirebase = this.getEventByName(localEditedEvent.$key);
    eventEntryInFirebase.update({
      name: localEditedEvent.name,
      date: localEditedEvent.date,
      attendees: localEditedEvent.attendees,
      conversations: localEditedEvent.conversations
    });
    alert("Current event has been saved to " + localEditedEvent.name + "!");
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
