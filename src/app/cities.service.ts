import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CityConversation } from './city-conversation.model';
import { EventService } from './event.service';

@Injectable()
export class CitiesService {
  cityConversations: FirebaseListObservable<any[]>;
  events: FirebaseListObservable<any[]>;
  cityToDelete;

  constructor(
    private http: Http,
    private af: AngularFireDatabase,
    private eventService: EventService
  ) {
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

  getEventConvo(eventKey: string, convoIndex: number) {
    return this.af.object('/events/' + eventKey + '/conversations/' + convoIndex);
  }

  deleteComment(localCommentToDelete){
    this.getCityById(localCommentToDelete.$key).subscribe(city => {
      this.cityToDelete = city.id;

      this.events = this.eventService.getEvents();
      this.events.subscribe(events => {
        events.forEach(event => {
          for (var i = 0; i < event.conversations.length; i++) {
            var targetConvo = this.getEventConvo(event.$key, i);

            this.getEventConvo(event.$key, i).subscribe(convo => {
              if (convo.$value === this.cityToDelete) {
                targetConvo.remove();
              }
            });
          }
        });
      })
    });
    this.getCityById(localCommentToDelete.$key).remove();
  }

}
