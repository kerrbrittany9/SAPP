import { Component, OnInit } from '@angular/core';
import { LiteratureService } from '../literature.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { BookConversation } from '../book-conversation.model';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-saved-books',
  templateUrl: './saved-books.component.html',
  styleUrls: ['./saved-books.component.css'],
  providers: [LiteratureService, EventService]
})
export class SavedBooksComponent implements OnInit {

  books: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  eventList;

  constructor(private literatureService: LiteratureService, private eventService: EventService) { }

  ngOnInit() {
    this.books = this.literatureService.getBooks();
    this.events = this.eventService.getEvents();
  }

  sendBookToEvent(event: Event, book: BookConversation) {
    event.conversations.push(book.id);
    this.eventService.saveBookToEvent(event);
  }

  beginDeletingBook(bookToDelete){
    if(confirm("Are you sure you want to delete this book?")){
      this.literatureService.deleteBook(bookToDelete);
    }
  }
}
