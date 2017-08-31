import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CityConversation } from './city-conversation.model';

@Injectable()
export class CitiesService {
  cityConversations: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFireDatabase) {
    this.cityConversations = af.list('cityConversations');
  }

  addCityConvo(newCityConvo: CityConversation) {
    this.cityConversations.push(newCityConvo);
  }

  getCities() {
    return this.cityConversations;
  }

  getCityById(id: string) {
    return this.af.object('/cityConversations/' + id);
  }

  deleteComment(localCommentToDelete){
    let foundCity = this.getCityById(localCommentToDelete.$key);
    foundCity.remove();
  }

}
