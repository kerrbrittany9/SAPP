import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CitiesApiService } from '../cities-api.service';
// import cities from './../../cities-list';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [ CitiesApiService ]
})
export class CitiesComponent implements OnInit {
  selection: string = null;
  stats: any[] = null;
  searchDone: boolean = false;

  constructor(private cityService: CitiesApiService) { }

  getCityInfo(city: string) {
    this.cityService.getCities(city).subscribe(response => {
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

  ngOnInit() {
  }

}
