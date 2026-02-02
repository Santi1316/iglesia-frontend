import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: true,
  template: `
    <h2>Certificados</h2>
    <ul>
      <li *ngFor="let c of certificados">
        {{ c.codigo }} - {{ c.tipo }}
      </li>
    </ul>
  `
})
export class ListaCertificadosComponent implements OnInit {
  certificados: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/certificados`)
      .subscribe(data => this.certificados = data);
  }
}
