import { Component, OnInit } from '@angular/core';
import { masterGoogleBooksConfig } from '../api-key-google';
import { LiteratureService } from '../literature.service';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css'],
  providers: [LiteratureService]
})
export class LiteratureComponent implements OnInit {
  books: any[] = null;

  constructor(private literatureService: LiteratureService) { }

  ngOnInit() {
  }

  beginLiteratureSearch(keyword: string) {
    var callString = "https://www.googleapis.com/books/v1/volumes?q=" + keyword;
    this.literatureService.getLiteratureData(callString).subscribe(response => {
      this.books = response.json().items;
    });
  }
}
