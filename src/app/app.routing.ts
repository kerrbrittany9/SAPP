import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { LiteratureComponent } from './literature/literature.component';
import { CurrentEventsComponent } from './current-events/current-events.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
