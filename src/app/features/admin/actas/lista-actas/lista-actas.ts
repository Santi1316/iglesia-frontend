import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Actas</h2>
    <ul>
      <li *ngFor="let acta of actas">
        {{ acta.tipo }} - {{ acta.fecha }}
      </li>
    </ul>
  `
})
export class ListaActasComponent implements OnInit {
  actas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}/actas`)
      .subscribe(data => this.actas = data);
  }
}
