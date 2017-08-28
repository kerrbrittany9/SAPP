import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtsComponent } from './arts/arts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'arts',
    component: ArtsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
