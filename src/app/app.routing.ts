import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'trivia',
    component: TriviaFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
