import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Bienvenido al Sistema Eclesiástico</h1>
    <a routerLink="/login">Iniciar sesión</a> |
    <a routerLink="/solicitud-certificado">Solicitar certificado</a>
  `
})
export class HomeComponent {}
