import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';

import { authReducer } from './store/auth/auth.reducer';
import { solicitudReducer } from './store/solicitud/solicitud.reducer';

import { AuthEffects } from './store/auth/auth.effects';
import { SolicitudEffects } from './store/solicitud/solicitud.effects';

import { authInterceptor } from './core/interceptors/auth-interceptor';
import { errorInterceptor } from './core/interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
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

    provideAnimations(),
    
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    })
  ]
};