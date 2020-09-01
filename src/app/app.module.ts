import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule  } from './login/LoginModule';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.router'



// MODULOS PROPIOS

import { PageModule  } from './page/page.module';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component'
import { ComponentsModule } from './components/components.module'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule,
    PageModule,
    ComponentsModule,
    APP_ROUTES
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
