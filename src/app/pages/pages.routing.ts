import { LandingComponent } from './landing/landing.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicLayoutComponent } from '../layouts/public-layout/public-layout.component';

export const PagesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'landing',
                component: LandingComponent
            },
        ],

        // path: 'pages',
        // component: PublicLayoutComponent,
        // children: [
        //     { path: '', component: LandingComponent },
        //     { path: '', component: HomeComponent },

        // ]
    }
]