import { Component, OnInit } from '@angular/core';
import { CitiesApiService } from '../cities-api.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { CityConversation } from '../city-conversation.model';
import { CitiesService } from '../cities.service';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css'],
  providers: [CitiesApiService, CitiesService, EventService]
})
export class SavedCitiesComponent implements OnInit {
  cities: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  eventList;

  constructor(private cityApiService: CitiesApiService, private citiesService: CitiesService, private eventService: EventService) { }

  ngOnInit() {
    this.cities = this.citiesService.getCities();
    this.events = this.eventService.getEvents();
  }

  sendCityToEvent(event: Event, city: CityConversation) {
    // console.log(event);
    event.conversations.push(city.id);
    this.eventService.saveCityToEvent(event);
  }

}
