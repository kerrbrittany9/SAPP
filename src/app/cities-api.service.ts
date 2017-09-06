import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CityConversation } from './city-conversation.model';
import { CitiesService } from './cities.service';

@Injectable()
export class CitiesApiService {
  // cityConversations: FirebaseListObservable<any[]>;

  constructor(private http: Http, private citiesService: CitiesService) {
    // this.cityConversations = database.list('cityConversations');
  }

  cityInput;

  getCityStats(city: string) {
    var cityLower = city.toLowerCase();
    this.cityInput = cityLower;
    return this.http.get("https://api.teleport.org/api/urban_areas/slug:" + cityLower + "/scores/")
  }

  beginSaveCityConvo(comments: string, city: string, id: string) {
    return this.http.get("https://api.teleport.org/api/urban_areas/slug:" + this.cityInput + "/scores/")
    .subscribe(response => {
      // var splitComments = comments.split(" ");
      // var commentsId = splitComments.join("-");
      // var cityId = city.length;
      // console.log(city);
      var id = city + ": " + comments;
      var newCityConvo = new CityConversation(comments, city, id);
      this.citiesService.addCityConvo(newCityConvo);
      alert("This city comment has been saved!");
    })
  }

}
