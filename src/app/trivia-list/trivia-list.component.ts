import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trivia-list',
  templateUrl: './trivia-list.component.html',
  styleUrls: ['./trivia-list.component.css'],
  providers: [ ]
})
export class TriviaListComponent implements OnInit {
  @Input() childTrivia;
  constructor() { }

  ngOnInit() {
  }

}
