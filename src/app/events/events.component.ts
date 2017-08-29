import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {
  events: FirebaseListObservable<any[]>;
  addingNewEvent: boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  showAddEventForm() {
    this.addingNewEvent = true;
  }

  beginAddingNewEvent(name: string, date: string, attendees: string) {
    var newEvent = new Event(name, date, attendees);
    this.eventService.addEvent(newEvent);
    this.addingNewEvent = false;
    // console.log(newEvent);
  }

}
