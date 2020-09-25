import { ComponentsModule } from './../../examples/components/components.module';
import { FormsModules } from './../../examples/forms/forms.module';
import { PublicLayoutroutes } from './public-layout.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public-layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PublicLayoutroutes),
    FormsModules,
    ComponentsModule
  ],
  declarations: [
  ]
})
export class PublicLayoutModule { }
