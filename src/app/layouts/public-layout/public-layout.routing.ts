import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/pages/landing/landing.component';

export const PublicLayoutroutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "landing",
        component: LandingComponent
      }
    ]
  },
];

