import { Component, Input } from '@angular/core';
import{ masterNewsApiConfig } from '../api-key-current-events';
import { CurrentEventsService } from '../current-events.service';
import { CurrentEventsComponent } from '../current-events/current-events.component';
import {CurrentEvent} from '../current-event.model';
import { CurrentEventApiService } from '../current-event-api.service';

@Component({
  selector: 'app-current-events-list',
  templateUrl: './current-events-list.component.html',
  styleUrls: ['./current-events-list.component.css'],
  providers: [CurrentEventsService, CurrentEventApiService]
})
export class CurrentEventsListComponent {
@Input() childArticles;
@Input() childSource;

showArticle = false;

  constructor(private currentEventsService: CurrentEventsService, private currentEventApiService: CurrentEventApiService) { }

  saveCurrentEvent(title: string, description: string) {
    console.log(this.currentEventApiService);
    console.log(this.childSource);
    this.currentEventApiService.saveCurrentEventObject(title, description, this.childSource);

  }

}
