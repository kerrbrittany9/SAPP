import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { masterGoogleBooksConfig } from '../api-key-google';
import { GoogleBooksService } from '../google-books.service';
import { BookConversation } from '../book-conversation.model';
import { LiteratureService } from '../literature.service';
import { EventService } from '../event.service';


@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css'],
  providers: [GoogleBooksService, LiteratureService, EventService]
})
export class LiteratureComponent implements OnInit {
  books: any[];

  constructor(
    private googleBooksService: GoogleBooksService,
    private literature: LiteratureService,
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  beginLiteratureSearch(keyword: string) {
    this.googleBooksService.getLiteratureData(keyword).subscribe(response => {
      this.books = response.json().items;
    });
  }

}
