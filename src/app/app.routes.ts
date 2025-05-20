import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageMotoristaComponent } from './pages/motorista/homepage-motorista';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'motorista', component: HomepageMotoristaComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
