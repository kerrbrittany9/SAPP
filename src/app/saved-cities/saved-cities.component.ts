import { Component, OnInit } from '@angular/core';
import { CitiesApiService } from '../cities-api.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { CityConversation } from '../city-conversation.model';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css'],
  providers: [CitiesApiService, CitiesService]
})
export class SavedCitiesComponent implements OnInit {
  cities: FirebaseListObservable<any[]>;

  constructor(private cityApiService: CitiesApiService, private citiesService: CitiesService) { }

  ngOnInit() {
    this.cities = this.citiesService.getCities();
  }

}
