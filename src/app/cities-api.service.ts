import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CityConversation } from './city-conversation.model';

@Injectable()
export class CitiesApiService {
  cityConversations: FirebaseListObservable<any[]>;

  constructor(private http: Http, private database: AngularFireDatabase) {
    this.cityConversations = database.list('cityConversations');
  }

  getCityStats(city: string) {
    var cityLower = city.toLowerCase();
    return this.http.get("https://api.teleport.org/api/urban_areas/slug:" + cityLower + "/scores/")
  }

  getCityConversations() {
    return this.cityConversations;
  }

  saveCityConversation(newCityConversation: CityConversation) {
    this.cityConversations.push(newCityConversation);
  }

}
