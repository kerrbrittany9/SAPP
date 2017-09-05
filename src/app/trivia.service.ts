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
    // let foundEventConvo = this.eventService.getEventConvo();

    this.events = this.eventService.getEvents();
    this.events.subscribe(events => {
      events.forEach(event => {
        // let targetEvent = this.eventService.getEventByName(event.name);
        event.conversations.forEach(convo => {
          this.getTriviaById(convo).subscribe(trivia => {
            console.log(convo);
            console.log(trivia.$key);

            if (trivia.$key === convo) {
              this.eventService.deleteConvoFromEvent(event, convo);
            }
          });
        })

        // var eventConvos = this.eventService.getEventConvo(targetEvent).subscribe(convos => {
        //   console.log(convos);
        //   // convos.forEach(convo => {
        //   //   console.log(foundTrivia);
        //     // if (convo === foundTrivia.id) {
        //     //   let convoInFirebase = this.deleteConvoFromEvent(event, convo);
        //     // }
        //   // })
        // })
        foundTrivia.subscribe(trivia => {

          // eventConvos.forEach(convo => {
          //   if (convo == trivia.id) {
          //     this.eventService.deleteConvoFromEvent(event, convo);
          //   }
          // })
        // })
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
    })
  }
}
