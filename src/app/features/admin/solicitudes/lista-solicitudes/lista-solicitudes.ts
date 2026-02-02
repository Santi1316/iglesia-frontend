import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: true,
  template: `
    <h2>Solicitudes</h2>
    <ul>
      <li *ngFor="let s of solicitudes">
        {{ s.id }} - {{ s.tipo }} - {{ s.estado }}
      </li>
    </ul>
  `
})
export class ListaSolicitudesComponent implements OnInit {
  solicitudes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/solicitudes`)
      .subscribe(data => this.solicitudes = data);
  }
}
