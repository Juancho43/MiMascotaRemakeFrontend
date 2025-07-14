import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/pages/landing/landing'),
  },
  {
    path:'auth',
    children: [
        {
          path: 'login',
          loadComponent: () => import('./components/auth/login/login'),
        },
        {
          path: 'logout',
          loadComponent: () => import('./components/auth/logout/logout'),
        },
        {
          path: 'register',
          loadComponent: () => import('./components/auth/register/register'),
        },
        {
          path: 'validate',
          loadComponent: () => import('./components/auth/validate/validate'),
        },
        {
          path: 'password',
          loadComponent: () => import('./components/auth/password-reset/password-reset'),
        },

      ]
  },
  {
    path: 'app/journals',
    loadComponent: () => import('./components/journals/journal-page/journal-page'),
  }
];
