import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { RouterModule  } from '@angular/router'
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PAGES_ROUTES  } from './page.route';
import { HomeComponent } from './home/home/home.component';
import { AgregarSociedadComponent } from './agregar-sociedad/agregar-sociedad.component';
import {  ComponentsModule } from '../components/components.module'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PageComponent, HomeComponent, AgregarSociedadComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PAGES_ROUTES,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports : [
    ReactiveFormsModule,
    PageComponent
  ]
})
export class PageModule { }
