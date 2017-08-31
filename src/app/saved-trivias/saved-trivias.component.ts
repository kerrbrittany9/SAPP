import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { Trivia } from '../trivia.model';


@Component({
  selector: 'app-saved-trivias',
  templateUrl: './saved-trivias.component.html',
  styleUrls: ['./saved-trivias.component.css'],
  providers: [TriviaService, EventService]
})
export class SavedTriviasComponent implements OnInit {
  trivias: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  eventList;

  constructor(private triviaService: TriviaService, private eventService: EventService) { }

  ngOnInit() {
    this.trivias = this.triviaService.getTrivias();
    this.events = this.eventService.getEvents();
  }

  sendTriviaToEvent(event: Event, trivia: Trivia) {
    event.conversations.push(trivia.id);
    this.eventService.saveTriviaToEvent(event);
  }

  beginDeletingTrivia(triviaToDelete){
    if(confirm("Are you sure you want to delete this trivia?")){
      this.triviaService.deleteTrivia(triviaToDelete);
    }
  }
}
