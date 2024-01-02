import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorreoService {
  private apiUrl = 'http://localhost:3005'; // URL DEL SERVIDOR BACKEND

  constructor(private http: HttpClient) {}

  enviarCorreo(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-correo`, datos);
  }
}
