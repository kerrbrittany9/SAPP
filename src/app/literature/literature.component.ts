import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { masterGoogleBooksConfig } from '../api-key-google';
import { GoogleBooksService } from '../google-books.service';
import { BookConversation } from '../book-conversation.model';



@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css'],
  providers: [GoogleBooksService]
})
export class LiteratureComponent implements OnInit {
  books: any[] = null;

  constructor(private googleBooksService: GoogleBooksService) { }

  ngOnInit() {
  }

  beginLiteratureSearch(keyword: string) {
    var callString = "https://www.googleapis.com/books/v1/volumes?q=" + keyword;
    this.googleBooksService.getLiteratureData(callString).subscribe(response => {
      this.books = response.json().items;
    });
  }

}
