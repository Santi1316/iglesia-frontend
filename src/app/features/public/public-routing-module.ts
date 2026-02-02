import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.HomeComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./register/register').then(m => m.RegisterComponent)
      },
      {
        path: 'solicitud-certificado',
        loadComponent: () => import('./solicitud-certificado/solicitud-certificado')
          .then(m => m.SolicitudCertificadoComponent)
      },
      {
        path: 'pago',
        loadComponent: () => import('./pago/pago').then(m => m.PagoComponent)
      },
      {
        path: 'mis-solicitudes',
        loadComponent: () => import('./mis-solicitudes/mis-solicitudes')
          .then(m => m.MisSolicitudesComponent)
      },
      {
        path: 'verificacion-certificado',
        loadComponent: () => import('./verificacion-certificado/verificacion-certificado')
          .then(m => m.VerificacionCertificadoComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }