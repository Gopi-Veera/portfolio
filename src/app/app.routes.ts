import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((comp) => comp.HomeComponent),
      },
      {
        path: 'aboutme',
        loadComponent: () =>
          import('./about-me/about-me.component').then(
            (comp) => comp.AboutMeComponent,
          ),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./skills/skills.component').then(
            (comp) => comp.SkllsComponent,
          ),
      },
      {
        path: 'works',
        loadComponent: () =>
          import('./works/works.component').then((comp) => comp.WorksComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then(
            (comp) => comp.ContactComponent,
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];
