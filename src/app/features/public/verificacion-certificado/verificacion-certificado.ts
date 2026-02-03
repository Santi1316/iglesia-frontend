import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Verificar Certificado</h2>
    <input [(ngModel)]="codigo" placeholder="Código de verificación" />
    <button (click)="verificar()">Verificar</button>
    <pre>{{ resultado | json }}</pre>
  `
})
export class VerificacionCertificadoComponent {
  codigo = '';
  resultado: any;

  constructor(private http: HttpClient) {}

  verificar() {
    this.http.get(`${environment.apiUrl}/certificados/verificar/${this.codigo}`)
      .subscribe(res => this.resultado = res);
  }
}
