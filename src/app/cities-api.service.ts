import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CitiesApiService {

  constructor(private http: Http) { }

  getCities(city: string) {
    var cityLower = city.toLowerCase();
    return this.http.get("https://api.teleport.org/api/urban_areas/slug:" + cityLower + "/scores/")
  }

}
