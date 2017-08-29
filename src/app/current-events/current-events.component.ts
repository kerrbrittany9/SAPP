import { Component, OnInit } from '@angular/core';
import { masterNewsApiConfig } from '../api-key-current-events';
import { CurrentEventsService } from '../current-events.service'


@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css'],
  providers: [CurrentEventsService]
})
export class CurrentEventsComponent implements OnInit {

  constructor(private currentEventsService: CurrentEventsService) { }

  ngOnInit() {
  }

  beginNewsSearch(source: string, category: string){
    var callString = 'https://newsapi.org/v1/articles?source='+ source + '&category=' + category + '&apikey=54c70d579915400ebe7b9d7c36f6fb77';
    this.currentEventsService.getNews(callString)
  }

}
