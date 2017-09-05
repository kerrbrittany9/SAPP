import { Injectable } from '@angular/core';
import { Trivia } from './trivia.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EventService } from './event.service';

@Injectable()
export class TriviaService {
  trivia: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;

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

  deleteTrivia(localTriviaToDelete){
    let foundTrivia = this.getTriviaById(localTriviaToDelete.$key);
    this.events = this.eventService.getEvents();
    this.events.subscribe(events => {
      events.forEach(event => {
        var eventName = event.name;
        var eventConvos = this.eventService.getEventConvos(event);
        foundTrivia.subscribe(trivia => {
          eventConvos.forEach(convo => {
            if (convo == trivia.id) {
              this.eventService.deleteConvoFromEvent(event, convo);
            }
          })
        })
        // event.conversations.forEach(convo => {
        //   foundTrivia.subscribe(trivia => {
            // if (trivia.id == convo) {
            //   let targetConvo = this.
            //   // console.log(trivia.id);
            //   // console.log(convo);
            //   convo.remove();
            // }
        //   })
        // })
      })
    });
    foundTrivia.remove();
  }

}
