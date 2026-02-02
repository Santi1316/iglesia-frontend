import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          this.storage.setToken(response.token);
          this.storage.setUser(response.user);
        })
      );
  }

  logout(): void {
    this.storage.clear();
  }

  isAuthenticated(): boolean {
    return !!this.storage.getToken();
  }

  getToken(): string | null {
    return this.storage.getToken();
  }

  getUser(): any {
    return this.storage.getUser();
  }

  hasRole(role: string): boolean {
    const user = this.getUser();
    return user?.roles?.includes(role);
  }
}
