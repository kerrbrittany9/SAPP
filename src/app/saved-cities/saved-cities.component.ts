import { Component, OnInit } from '@angular/core';
import { CitiesApiService } from '../cities-api.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { CityConversation } from '../city-conversation.model';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css'],
  providers: [CitiesApiService]
})
export class SavedCitiesComponent implements OnInit {
  cities: FirebaseListObservable<any[]>;

  constructor(private cityService: CitiesApiService) { }

  ngOnInit() {
    this.cities = this.cityService.getCityConversations();
  }

}
