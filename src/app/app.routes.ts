import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';  // ← CORREGIDO: sin .ts
import { adminGuard } from './core/guards/admin-guard';  // ← CORREGIDO: sin .ts

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/public/public-routing-module')  // ← CORREGIDO: guión en lugar de punto
      .then(m => m.PublicRoutingModule)
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./features/admin/admin-routing-module')  // ← CORREGIDO: guión en lugar de punto
      .then(m => m.AdminRoutingModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
