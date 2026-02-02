import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SolicitudState } from './solicitud.reducer';

export const selectSolicitudState =
  createFeatureSelector<SolicitudState>('solicitudes');

export const selectSolicitudes =
  createSelector(selectSolicitudState, s => s.solicitudes);
