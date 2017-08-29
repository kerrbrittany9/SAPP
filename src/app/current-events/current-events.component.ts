import { Component, OnInit } from '@angular/core';
import { masterNewsApiConfig } from '../api-key-current-events';
import { Observable } from 'rxjs/Observable';
import { CurrentEventsService } from '../current-events.service'


@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css'],
  providers: [CurrentEventsService]
})

export class CurrentEventsComponent implements OnInit {

  ngOnInit() {
  }
    articles: any[] = null;

    constructor(private currentEventsService: CurrentEventsService) { }

    getNews(source: string){
    this.currentEventsService.getBySource(source).subscribe(response => {this.articles = response.json().articles;

      console.log(this.articles);
    });

  }

}
