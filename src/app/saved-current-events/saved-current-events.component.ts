import { Component, OnInit } from '@angular/core';
import { CurrentEventsService } from '../current-events.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { CurrentEvent } from '../current-event.model';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-saved-current-events',
  templateUrl: './saved-current-events.component.html',
  styleUrls: ['./saved-current-events.component.css'],
  providers: [CurrentEventsService, EventService]
})
export class SavedCurrentEventsComponent implements OnInit {
  currentEvents: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  eventList;

  constructor(private currentEventsService: CurrentEventsService, private eventService: EventService) { }

  ngOnInit() {
    this.currentEvents = this.currentEventsService.getCurrentEvents();
    this.events = this.eventService.getEvents();
  }

  sendCurrentEventToEvent(event: Event, currentEvent: CurrentEvent) {
    event.conversations.push(currentEvent.id);
    this.eventService.saveCurrentEventToEvent(event);

  }
}
