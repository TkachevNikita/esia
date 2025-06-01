import type { Route } from '@angular/router';
import {AuthComponent} from "./auth.component";

export const authRoutes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: async () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent,
          ),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    ],
  },
];
