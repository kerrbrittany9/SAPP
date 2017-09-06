import { Injectable } from '@angular/core';
import { Trivia } from './trivia.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EventService } from './event.service';

@Injectable()
export class TriviaService {
  trivia: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  triviaToDelete;

  constructor(private af: AngularFireDatabase, private eventService: EventService) {
    this.trivia = af.list('trivia');
  }

  addTrivia(newTrivia: Trivia) {
    this.trivia.push(newTrivia);
  }

  getTrivias() {
    return this.trivia;
  }

  getTriviaById(id: string) {
    return this.af.object('/trivia/' + id);
  }

  getEventConvo(eventKey: string, convoIndex: number) {
    return this.af.object('/events/' + eventKey + '/conversations/' + convoIndex);
  }

  deleteTrivia(localTriviaToDelete) {
    this.getTriviaById(localTriviaToDelete.$key).subscribe(trivia => {
      this.triviaToDelete = trivia.id;

      this.events = this.eventService.getEvents();
      this.events.subscribe(events => {
        events.forEach(event => {
          for (var i = 0; i < event.conversations.length; i++) {
            var targetConvo = this.getEventConvo(event.$key, i);

            this.getEventConvo(event.$key, i).subscribe(convo => {
              if (convo.$value === this.triviaToDelete) {
                targetConvo.remove();
              }
            });
          }
        });
      })
    });
    this.getTriviaById(localTriviaToDelete.$key).remove();
  }
}
