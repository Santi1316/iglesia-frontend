import { createAction, props } from '@ngrx/store';

export const loadSolicitudes = createAction('[Solicitud] Load');

export const loadSolicitudesSuccess = createAction(
  '[Solicitud] Load Success',
  props<{ solicitudes: any[] }>()
);
