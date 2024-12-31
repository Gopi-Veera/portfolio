import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkllsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'portfolio',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'aboutme',
        component: AboutMeComponent,
      },
      {
        path: 'skills',
        component: SkllsComponent,
      },
      {
        path: 'works',
        component: WorksComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portfolio',
  },
];
