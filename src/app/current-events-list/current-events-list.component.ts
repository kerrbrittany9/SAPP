import { Component, Input } from '@angular/core';
import{ masterNewsApiConfig } from '../api-key-current-events';
import { CurrentEventsService } from '../current-events.service';
import { CurrentEventsComponent } from '../current-events/current-events.component';

@Component({
  selector: 'app-current-events-list',
  templateUrl: './current-events-list.component.html',
  styleUrls: ['./current-events-list.component.css'],
  providers: [CurrentEventsService]
})
export class CurrentEventsListComponent {
@Input() childArticles;
showArticle = false;

  constructor(private currentEventsService: CurrentEventsService) { }

}
