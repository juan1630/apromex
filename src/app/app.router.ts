import  {  RouterModule, Routes } from '@angular/router';

import {  LoginComponent  } from './login/login.component';
import { PageComponent } from './page/page.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';


const  appRoute : Routes = [

   { 
      path: '',
      component: PageComponent,
      children: [
          
          { path: 'dashboard', component: DashboardComponent },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      ]
    },

    { path: 'login', component:LoginComponent  },
    { path: '**', component: LoginComponent }
];


export const APP_ROUTES = RouterModule.forRoot(  appRoute, { useHash: true } );

