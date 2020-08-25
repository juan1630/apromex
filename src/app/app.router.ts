import  {  RouterModule, Routes } from '@angular/router';

import {  LoginComponent  } from './login/login.component';


const  appRoute : Routes = [

   { path: 'login', component: LoginComponent },
   { path: '**', component: LoginComponent }
];


export const APP_ROUTES = RouterModule.forRoot(  appRoute, { useHash: true } );

