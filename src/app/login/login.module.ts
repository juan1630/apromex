import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  LoginComponent } from './login.component';
import  { FormsModule , ReactiveFormsModule } from '@angular/forms'
import  { RouterModule } from '@angular/router'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports : [
    LoginComponent
  ]
})
export class LoginModule { }
