import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule} from '@angular/router'

// PROPIOS 

import { NavbarComponent } from './navbar/navbar/navbar.component'

@NgModule({
  declarations: [ 
   NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  exports : [ 
    NavbarComponent
  ]
})
export class ComponentsModule { }
