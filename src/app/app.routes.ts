import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () =>
      import('./features/auth/auth.routes').then((r) => r.authRoutes),
  }
];
