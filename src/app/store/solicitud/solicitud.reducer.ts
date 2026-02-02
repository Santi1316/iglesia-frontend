import { createReducer, on } from '@ngrx/store';
import * as SolicitudActions from './solicitud.actions';

export interface SolicitudState {
  solicitudes: any[];
}

export const initialState: SolicitudState = {
  solicitudes: []
};

export const solicitudReducer = createReducer(
  initialState,
  on(SolicitudActions.loadSolicitudesSuccess,
    (state, { solicitudes }) => ({ ...state, solicitudes }))
);
