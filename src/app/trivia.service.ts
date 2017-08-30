import { Injectable } from '@angular/core';
import { Trivia } from './trivia.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TriviaService {
  trivia: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.trivia = af.list('trivia');
  }

  addTrivia(newTrivia: Trivia) {
    this.trivia.push(newTrivia);
  }

  getTrivias() {
    return this.trivia;
  }

}
