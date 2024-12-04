import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: TasksComponent,
    },
    {
        path: 'about',
        title: 'About Page',
        component: AboutComponent,
    }
];
