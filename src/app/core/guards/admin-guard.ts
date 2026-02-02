import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  // Verificar si tiene rol de admin
  if (authService.hasRole('ROLE_ADMIN') || 
      authService.hasRole('ROLE_SUPER_ADMIN')) {
    return true;
  }

  // Redirigir a home si no es admin
  router.navigate(['/']);
  return false;
};