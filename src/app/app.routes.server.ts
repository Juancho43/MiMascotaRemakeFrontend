import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client
  },
  {
    path: 'app',
    renderMode: RenderMode.Server,
  },
  {
    path: 'forum',
    renderMode: RenderMode.Server,
  }
  ,
  {
    path: '',
    renderMode: RenderMode.Client
  },

];
