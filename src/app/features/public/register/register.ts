import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Registro</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="nombre" name="nombre" placeholder="Nombre" required />
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Contraseña" required />
      <button>Registrarse</button>
    </form>
  `
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http.post(`${environment.apiUrl}/auth/register`, {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    }).subscribe(() => alert('Usuario registrado'));
  }
}
