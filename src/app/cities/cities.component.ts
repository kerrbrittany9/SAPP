import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CitiesApiService } from '../cities-api.service';
import { CityConversation } from '../city-conversation.model';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [ CitiesApiService, CitiesService ]
})
export class CitiesComponent implements OnInit {
  selection: string = null;
  stats: any[] = null;
  searchDone: boolean = false;
  cityNotes: any[] = null;

  constructor(private cityApiService: CitiesApiService, private citiesService: CitiesService) { }

  getCityInfo(city: string) {
    this.cityApiService.getCityStats(city).subscribe(response => {
      this.stats = response.json().categories;
      if (city == "cape-town") {
        this.selection = "Cape Town";
      } else if (city == "ho-chi-minh-city") {
        this.selection = "Ho Chi Minh";
      } else if (city == "mexico-city") {
        this.selection = "Mexico City";
      } else if (city == "portland-or") {
        this.selection = "Portland";
      } else if (city == "rio-de-janeiro") {
        this.selection = "Rio de Janeiro";
      } else if (city == "san-francisco-bay-area") {
        this.selection = "San Francisco";
      } else {
        this.selection = city;
      }
    });
    this.searchDone = true;
  }

  saveCityNotes(comments: string, city: string, id: string) {
    this.searchDone = false;
    var arr = this.selection.toLowerCase().split(' ');
    var capArr = [];
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      var word = arr[i].split('');
      word[0] = word[0].toUpperCase();
      var capWord = word.join('');
      capArr.push(capWord);
      console.log(capArr);
    }
    var capStr = capArr.join(' ');
    console.log(capStr);

    this.cityApiService.beginSaveCityConvo(comments, capStr, id);
  }

  ngOnInit() {
  }

}
