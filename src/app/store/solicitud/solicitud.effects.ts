import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as SolicitudActions from './solicitud.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class SolicitudEffects {

  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SolicitudActions.loadSolicitudes),
      mergeMap(() =>
        this.http.get<any[]>(`${environment.apiUrl}/solicitudes`)
          .pipe(
            map(data =>
              SolicitudActions.loadSolicitudesSuccess({ solicitudes: data })
            )
          )
      )
    )
  );
}
