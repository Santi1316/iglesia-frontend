import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';

import { authReducer } from './store/auth/auth.reducer';
import { solicitudReducer } from './store/solicitud/solicitud.reducer';

import { AuthEffects } from './store/auth/auth.effects';
import { SolicitudEffects } from './store/solicitud/solicitud.effects';

import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorInterceptor
      ])
    ),

    provideStore({
      auth: authReducer,
      solicitudes: solicitudReducer
    }),

    provideEffects([
      AuthEffects,
      SolicitudEffects
    ]),

    provideAnimations()
  ]
};
