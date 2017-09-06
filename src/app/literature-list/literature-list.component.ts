import { Component, OnInit, Input } from '@angular/core';
import { BookConversation } from '../book-conversation.model';
import { masterGoogleBooksConfig } from '../api-key-google';
import { GoogleBooksService } from '../google-books.service';
import { LiteratureService } from '../literature.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-literature-list',
  templateUrl: './literature-list.component.html',
  styleUrls: ['./literature-list.component.css'],
  providers: [LiteratureService, GoogleBooksService, EventService]
})
export class LiteratureListComponent implements OnInit {
  @Input() childBooks;

  constructor(
    private literatureService: LiteratureService,
    private googleBooksService: GoogleBooksService,
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  saveBook(title: string, authors: string, coverImage: string, comments: string, id: string) {
    this.googleBooksService.beginSaveBookConvo(title, authors, coverImage, comments, id);
  }

}
