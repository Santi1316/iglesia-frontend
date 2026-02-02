import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: true,
  template: `
    <h2>Pagos</h2>
    <ul>
      <li *ngFor="let p of pagos">
        {{ p.id }} - {{ p.monto }} - {{ p.estado }}
      </li>
    </ul>
  `
})
export class ListaPagosComponent implements OnInit {
  pagos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/pagos`)
      .subscribe(data => this.pagos = data);
  }
}
