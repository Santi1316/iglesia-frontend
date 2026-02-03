import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `...`
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/usuarios`)
      .subscribe(data => this.usuarios = data);
  }
}
