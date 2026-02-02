import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Solicitud de Certificado</h2>
    <form (ngSubmit)="enviar()">
      <input [(ngModel)]="tipo" name="tipo" placeholder="Tipo de certificado" required />
      <input [(ngModel)]="documento" name="documento" placeholder="Documento" required />
      <button>Enviar solicitud</button>
    </form>
  `
})
export class SolicitudCertificadoComponent {
  tipo = '';
  documento = '';

  constructor(private http: HttpClient, private router: Router) {}

  enviar() {
    this.http.post<any>(`${environment.apiUrl}/solicitudes`, {
      tipo: this.tipo,
      documento: this.documento
    }).subscribe(resp => this.router.navigate(['/pago', resp.id]));
  }
}
