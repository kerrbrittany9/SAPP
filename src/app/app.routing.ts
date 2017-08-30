import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { LiteratureComponent } from './literature/literature.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { EventsComponent } from  './events/events.component';
import { CitiesComponent } from './cities/cities.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'trivia',
    component: TriviaFormComponent
  },
  {
    path: 'literature',
    component: LiteratureComponent
  },
  {
    path: 'current-events',
    component: CurrentEventsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
