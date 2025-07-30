import {Routes} from '@angular/router';
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
        children: [
            {
              path: 'all',
              loadComponent: () => import('./components/journals/journal-list/journal-list'),
            },
            {
              path: 'new',
              loadComponent: () => import('./components/journals/journal-form/journal-form'),
            },
            {
              path: ':id',
              loadComponent: () => import('./components/journals/journal-view/journal-view'),

              children:[
                {
                  path: 'view',
                  loadComponent: () => import('./components/journals/journal-detail/journal-detail'),
                },
                {
                  path: 'entries/new',
                  loadComponent: () => import('./components/entries/entry-form/entry-form'),
                },
                {
                  path:'image',
                  loadComponent: () => import('./components/journals/animal-image-form/animal-image-form').then( m => m.AnimalImageForm),
                },
                {
                  path: 'edit',
                  loadComponent: () => import('./components/journals/journal-form/journal-form'),
                },
              ]
            }
          ]
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./components/pages/not-found/not-found'),
  }
];
