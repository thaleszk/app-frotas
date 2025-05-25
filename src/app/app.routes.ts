import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageMotoristaComponent } from './pages/motorista/homepage-motorista';
import { IniciarViagemComponent } from './pages/viagem/iniciar-viagem/iniciar-viagem.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'motorista', component: HomepageMotoristaComponent},
    { path: 'iniciar-viagem', component: IniciarViagemComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
