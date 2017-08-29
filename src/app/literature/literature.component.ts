import { Component, OnInit } from '@angular/core';
import { masterGoogleBooksConfig } from '../api-key-google';
import { GoogleBooksService } from '../google-books.service';
import { LiteratureService } from '../literature.service';
import { BookConversation } from '../book-conversation.model';


@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css'],
  providers: [LiteratureService, GoogleBooksService]
})
export class LiteratureComponent implements OnInit {
  books: any[] = null;
  searchDone: boolean = false;
  constructor(private literatureService: LiteratureService, private googleBooksService: GoogleBooksService) { }

  ngOnInit() {
  }

  beginLiteratureSearch(keyword: string) {
    var callString = "https://www.googleapis.com/books/v1/volumes?q=" + keyword;
    this.googleBooksService.getLiteratureData(callString).subscribe(response => {
      this.books = response.json().items;
    });
    this.searchDone = true;
  }

  beginSaveBookConvo(title: string, authors: string[], coverImage: string, comments: string) {
    var id = title + "-" + authors[0];
    var newBookConvo = new BookConversation(title, authors, coverImage, comments, id);
    console.log(newBookConvo);
  }
}
