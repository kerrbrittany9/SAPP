import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Event } from '../event.model';
import { EventService } from '../event.service';


@Component({
  selector: 'app-saved-trivias',
  templateUrl: './saved-trivias.component.html',
  styleUrls: ['./saved-trivias.component.css'],
  providers: [TriviaService, EventService]
})
export class SavedTriviasComponent implements OnInit {
  trivias: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;

  constructor(private triviaService: TriviaService, private eventService: EventService) { }

  ngOnInit() {
    this.trivias = this.triviaService.getTrivas();
    this.events = this.eventService.getEvents();
  }

  sendTriviaToEvent(selectedEvent) {

  }

}
