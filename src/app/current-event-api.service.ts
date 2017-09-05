import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CurrentEvent } from './current-event.model';
import { CurrentEventsService } from './current-events.service';


@Injectable()
export class CurrentEventApiService {

  constructor(private http: Http, private currentEventsService: CurrentEventsService) { }


  getBySource(source: string) {
    return this.http.get("https://newsapi.org/v1/articles?source=" + source + "&apikey=54c70d579915400ebe7b9d7c36f6fb77");
  }

  saveCurrentEventObject(title: string, description: string, source: string) {
    // console.log("hello");
    // console.log(source);
    return this.http.get("https://newsapi.org/v1/articles?source=" + source + "&apikey=54c70d579915400ebe7b9d7c36f6fb77")
    .subscribe(response => {
      let foundCurrentEvent: CurrentEvent;
      var id = title;
      foundCurrentEvent = new CurrentEvent(title, description, id);
      this.currentEventsService.addCurrentEvent(foundCurrentEvent);
      console.log(id);
    });
  }
}
