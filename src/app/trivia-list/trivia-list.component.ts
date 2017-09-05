import { Component, OnInit, Input } from '@angular/core';
import { TriviaApiService } from '../trivia-api.service';
import { Trivia } from '../trivia.model';
import { TriviaService } from '../trivia.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-trivia-list',
  templateUrl: './trivia-list.component.html',
  styleUrls: ['./trivia-list.component.css'],
  providers: [ TriviaApiService, TriviaService, EventService ]
})
export class TriviaListComponent implements OnInit {
  @Input() childChoice;
  @Input() childCategory;
  @Input() childTriviaList;

  constructor(private triviaAnswers: TriviaApiService, private trivia: TriviaService, private eventService: EventService) { }

  saveTrivia(question, incorrect, correct, category, id) {
    this.triviaAnswers.saveTriviaObject(question, incorrect, correct, category, id);
  }

  ngOnInit() {
  }

}
