import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: (): Promise<any> =>
      import('./features/landing/landing.component').then(
        (m) => m.LandingComponent
      )
  }
];
