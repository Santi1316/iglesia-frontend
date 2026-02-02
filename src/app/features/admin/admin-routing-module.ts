import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { ListaActasComponent } from './actas/lista-actas/lista-actas';
import { ListaSolicitudesComponent } from './solicitudes/lista-solicitudes/lista-solicitudes';
import { ListaPagosComponent } from './pagos/lista-pagos/lista-pagos';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios';
import { ListaCertificadosComponent } from './certificados/lista-certificados/lista-certificados';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'actas', component: ListaActasComponent },
  { path: 'solicitudes', component: ListaSolicitudesComponent },
  { path: 'pagos', component: ListaPagosComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'certificados', component: ListaCertificadosComponent }
];
