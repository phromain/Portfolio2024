import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProjetsPageComponent } from './page/projets-page/projets-page.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'projets', component: ProjetsPageComponent }
];
