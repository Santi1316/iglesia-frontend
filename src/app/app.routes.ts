import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/public/public-routing.module')
      .then(m => m.PublicRoutingModule)
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./features/admin/admin-routing.module')
      .then(m => m.AdminRoutingModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];