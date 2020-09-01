import { Routes, RouterModule  } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home/home.component';
import { AgregarSociedadComponent} from './agregar-sociedad/agregar-sociedad.component'

const  pagesRoutes : Routes = [
    { path : "",
    component: PageComponent,
    canActivate: [],
    children: [
        { path: 'home', component :HomeComponent  },
         { path: 'agregar/sociedad', component: AgregarSociedadComponent  },
        { path: '', redirectTo: '/dashboard', pathMatch:'full' }

    ]
 }
];



export const PAGES_ROUTES = RouterModule.forChild(  pagesRoutes );