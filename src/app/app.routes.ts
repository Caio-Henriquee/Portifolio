import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApresetationComponent } from './components/apresetation/apresetation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'apresentacao',
        component: ApresetationComponent,
    },
    {
        path: 'projetos',
        component: ProjectsComponent,
    },
    {
        path: 'contatos',
        component: ContactsComponent,
    }
];
