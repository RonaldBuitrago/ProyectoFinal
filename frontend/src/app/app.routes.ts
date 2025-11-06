import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { LibrosComponent } from './components/libros/libros';
import { LibreriasComponent } from './components/librerias/librerias';
import { DashboardComponent } from './components/dashboard/dashboard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        //   { path: '**', redirectTo: '/login' },
        { path: '', component: LoginComponent },
        { path: 'libros', component: LibrosComponent },
        { path: 'librerias', component: LibreriasComponent },
        { path: 'dashboard', component: DashboardComponent },
];
