import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: true,
  template: `
    <h2>Usuarios</h2>
    <ul>
      <li *ngFor="let u of usuarios">
        {{ u.nombre }} - {{ u.email }} - {{ u.rol }}
      </li>
    </ul>
  `
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/usuarios`)
      .subscribe(data => this.usuarios = data);
  }
}
