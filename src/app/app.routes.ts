import { Routes } from '@angular/router';
import {authGuard} from '@core/other/auth.guard';

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
          canActivate:[authGuard]
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
          canActivate:[authGuard]
        },
        {
          path:'user',
          loadComponent: () => import('./components/auth/user/user'),
          canActivate:[authGuard]

        }

      ]
  },
  {
    path: 'app',
    canActivate:[authGuard],

    children:[
      {
        path: 'journals',
        loadComponent: () => import('./components/journals/journal-page/journal-page'),
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./components/pages/not-found/not-found'),
  }
];
