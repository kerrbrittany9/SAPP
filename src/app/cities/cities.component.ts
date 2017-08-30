import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CitiesApiService } from '../cities-api.service';

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
    console.log(city);
    this.cityService.getCities(city).subscribe(response => {
      this.stats = response.json().categories;
      console.log(this.stats)
    });
    this.searchDone = true;
    this.selection = city;
  }

  ngOnInit() {
  }

}
