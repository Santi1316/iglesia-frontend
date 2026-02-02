import { AuthState } from './auth/auth.reducer';
import { SolicitudState } from './solicitud/solicitud.reducer';

export interface AppState {
  auth: AuthState;
  solicitudes: SolicitudState;
}
