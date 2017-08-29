import { Component, OnInit, Input } from '@angular/core';
import { BookConversation } from '../book-conversation.model';
import { masterGoogleBooksConfig } from '../api-key-google';
import { GoogleBooksService } from '../google-books.service';
import { LiteratureService } from '../literature.service';

@Component({
  selector: 'app-literature-list',
  templateUrl: './literature-list.component.html',
  styleUrls: ['./literature-list.component.css'],
  providers: [LiteratureService]
})
export class LiteratureListComponent implements OnInit {
  @Input() childBooks;

  constructor(private literatureService: LiteratureService) { }

  ngOnInit() {
  }

  beginSaveBookConvo(title: string, authors: string[], coverImage: string, comments: string) {
    var splitTitle = title.split(" ");
    var titleId = splitTitle.join("-");
    var authorsId = authors.length;
    var id = titleId + "-" + authorsId;
    var newBookConvo = new BookConversation(title, authors, coverImage, comments, id);
  }

}
