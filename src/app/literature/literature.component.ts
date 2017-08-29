import { Component, OnInit } from '@angular/core';
import { masterGoogleBooksConfig } from '../api-key-google';
import { LiteratureService } from '../literature.service';
import { BookConversation } from '../book-conversation.model';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css'],
  providers: [LiteratureService]
})
export class LiteratureComponent implements OnInit {
  books: any[] = null;
  searchDone: boolean = false;
  constructor(private literatureService: LiteratureService) { }

  ngOnInit() {
  }

  beginLiteratureSearch(keyword: string) {
    var callString = "https://www.googleapis.com/books/v1/volumes?q=" + keyword;
    this.literatureService.getLiteratureData(callString).subscribe(response => {
      this.books = response.json().items;
    });
    this.searchDone = true;
  }

  beginSaveBookConvo(title: string, authors: string[], coverImage: string, comments: string) {
    var newBookConvo = new BookConversation(title, authors, coverImage, comments);
  }
}
