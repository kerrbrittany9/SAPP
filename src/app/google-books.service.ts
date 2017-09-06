import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LiteratureService } from './literature.service';
import { BookConversation } from './book-conversation.model';
import swal  from 'sweetalert2';

@Injectable()
export class GoogleBooksService {

  constructor(private http: Http, private literatureService: LiteratureService) { }

  getLiteratureData(keyword: string) {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + keyword)

  }

  beginSaveBookConvo(title: string, authors: string, coverImage: string, comments: string, id: string) {
    var keyword;
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + keyword)
    .subscribe(response => {
      var id = title + " by " + authors[0] + ": '" + comments + ".'";
      var newBookConvo = new BookConversation(title, authors, coverImage, comments, id);
      this.literatureService.addBookConvo(newBookConvo);
      swal('Congrats!', 'This book information has been saved!', 'success');
  });
  }

}
