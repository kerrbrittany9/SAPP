import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BookConversation } from './book-conversation.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EventService } from './event.service';

@Injectable()
export class LiteratureService {
  bookConversations: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  bookToDelete;

  constructor(
    private http: Http,
    private af: AngularFireDatabase,
    private eventService: EventService
  ) {
    this.bookConversations = af.list('bookConversations');
  }

  addBookConvo(newBookConvo: BookConversation) {
    this.bookConversations.push(newBookConvo);
  }

  getBooks() {
    return this.bookConversations;
  }

  getBookById(id: string) {
    return this.af.object('/bookConversations/' + id);
  }

  getEventConvo(eventKey: string, convoIndex: number) {
    return this.af.object('/events/' + eventKey + '/conversations/' + convoIndex);
  }

  deleteBook(localBookToDelete){
    this.getBookById(localBookToDelete.$key).subscribe(book => {
      this.bookToDelete = book.id;

      this.events = this.eventService.getEvents();
      this.events.subscribe(events => {
        events.forEach(event => {
          for (var i = 0; i < event.conversations.length; i++) {
            var targetConvo = this.getEventConvo(event.$key, i);
            this.getEventConvo(event.$key, i).subscribe(convo => {
              if (convo.$value === this.bookToDelete) {
                targetConvo.remove();
              }
            });
          }
        });
      })
    });
    this.getBookById(localBookToDelete.$key).remove();
  }
}
