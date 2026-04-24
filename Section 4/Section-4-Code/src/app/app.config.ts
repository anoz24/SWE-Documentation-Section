import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { Dashboard } from './componenets/dashboard/dashboard';
import { TeamDetail } from './componenets/team-detail/team-detail';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'team/:id', component: TeamDetail }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync() // Modern async animations
  ]
};