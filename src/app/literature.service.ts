import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BookConversation } from './book-conversation.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class LiteratureService {
  bookConversations: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFireDatabase) {
    this.bookConversations = af.list('bookConversations');
  }

  addBookConvo(newBookConvo: BookConversation) {
    this.bookConversations.push(newBookConvo);
  }

  getBooks() {
    return this.bookConversations;
  }

  // getLiteratureData(stringToCall: string) {
  //   console.log(stringToCall);
  //   return this.http.get(stringToCall);
  // }
}
