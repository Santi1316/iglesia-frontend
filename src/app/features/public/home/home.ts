import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [RouterLink, ButtonModule],
  styleUrls: ['./home.scss'],
  template: `
    <h1>Bienvenido al Sistema Eclesiástico</h1>

    <div class="buttons">
      <p-button
        label="Iniciar sesión"
        icon="pi pi-sign-in"
        routerLink="/login">
      </p-button>

      <p-button
        label="Solicitar certificado"
        icon="pi pi-file"
        routerLink="/solicitud-certificado"
        severity="secondary">
      </p-button>
    </div>
  `
})
export class HomeComponent {}
