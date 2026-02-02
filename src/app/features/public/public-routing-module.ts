import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { SolicitudCertificadoComponent } from './solicitud-certificado/solicitud-certificado';
import { PagoComponent } from './pago/pago';
import { VerificacionCertificadoComponent } from './verificacion-certificado/verificacion-certificado';
import { MisSolicitudesComponent } from './mis-solicitudes/mis-solicitudes';

export const PUBLIC_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'solicitud-certificado', component: SolicitudCertificadoComponent },
  { path: 'pago/:id', component: PagoComponent },
  { path: 'verificar', component: VerificacionCertificadoComponent },
  { path: 'mis-solicitudes', component: MisSolicitudesComponent }
];
