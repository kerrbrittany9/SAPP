import { Component, OnInit } from '@angular/core';
import { masterNewsApiConfig } from '../api-key-current-events';
import { Observable } from 'rxjs/Observable';
import { CurrentEventsService } from '../current-events.service';
import {CurrentEventApiService} from '../current-event-api.service';

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css'],
  providers: [CurrentEventsService, CurrentEventApiService]
})

export class CurrentEventsComponent implements OnInit {

  ngOnInit() {
  }
    articles: any[];
    sourceChoice = null;

    constructor(private currentEventsService: CurrentEventsService, private currentEventApiService: CurrentEventApiService) { }

    getNews(source: string){
      this.sourceChoice = source;
      // console.log(this.currentEventApiService);
      this.currentEventApiService.getBySource(source).subscribe(response => {this.articles = response.json().articles;
        // console.log(this.articles);
    });
  }


}
