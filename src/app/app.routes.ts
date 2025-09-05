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
        },
      //TODO: Password reset, and change password
        {
          path:'user',
          loadComponent: () => import('./components/auth/user/user'),
          canActivate:[authGuard]

        },
        {
          path: 'edit',
          loadComponent: () => import('./components/auth/user-edit/user-edit'),
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
              loadComponent: () => import('./components/journals/journal-create/journal-create'),
            },
            {
              path: ':slug',
              loadComponent: () => import('./components/journals/journal-view/journal-view'),

              children:[
                {
                  path: 'view',
                  loadComponent: () => import('./components/journals/journal-detail/journal-detail'),
                },
                {
                  path:'image',
                  loadComponent: () => import('@app/components/animals/animal-image-form/animal-image-form'),
                },
                {
                  path: 'edit',
                  loadComponent: () => import('./components/journals/journal-edit/journal-edit'),
                },
              ]
            }
          ]
      },
      {
        path: 'entries',
        children:[
          {
            path: 'new',
            loadComponent: () => import('./components/entries/entry-new/entry-new'),
          },
          {
            path: 'edit/:entryId',
            loadComponent: () => import('./components/entries/entry-edit/entry-edit'),
          },
        ]
      },
      {
        path: 'contacts',
        loadComponent: () => import('./components/contacts/contact-requests-page/contact-requests-page'),
        children:[
          {
            path:'owner',
            loadComponent: () => import('./components/contacts/contact-owner/contact-owner'),
          },
          {
            path:'requests',
            loadComponent: () => import('./components/contacts/contact-request/contact-request'),

          },
        ]
      },
    ]
  },
  {
    path:'forum',
    loadComponent: () => import('./components/forums/forum-page/forum-page'),
    children:[
      {
        path: 'all',
        loadComponent: () => import('./components/forums/forum-all/forum-all'),
      },
      {
        path: 'view/:slug/:page/:limit',
        loadComponent: () => import('./components/forums/forum-view/forum-view'),
      },
      {
        path: 'view/location/:slug/:page/:limit/:locationSlug',
        loadComponent: () => import('./components/forums/forum-view/forum-view'),
      },

      {
        path: 'new',
        loadComponent: () => import('./components/forums/forum-new/forum-new'),
      },
      {
        path: 'edit/:slug',
        loadComponent: () => import('./components/forums/forum-edit/forum-edit'),
      }
    ]
  },
  {
    path:'post',
    loadComponent: ()=> import('./components/posts/post-page/post-page'),
    children:[
      {
        path: 'new/:slug',
        loadComponent: () => import('./components/posts/post-new/post-new'),
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./components/posts/post-edit/post-edit'),
      },
      {
        path: 'view/:id',
        loadComponent: () => import('./components/posts/post-detail/post-detail'),
      },
      {
        path:'by/user/all',
        loadComponent: () => import('./components/posts/user-posts/user-posts'),
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./components/pages/not-found/not-found'),
  }
];
