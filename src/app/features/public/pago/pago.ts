import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: true,
  template: `
    <h2>Pago</h2>
    <p>Solicitud #{{id}}</p>
    <button (click)="pagar()">Pagar</button>
  `
})
export class PagoComponent {
  id!: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  pagar() {
    this.http.post(`${environment.apiUrl}/pagos/iniciar`, {
      solicitudId: this.id
    }).subscribe(() => alert('Pago iniciado'));
  }
}
