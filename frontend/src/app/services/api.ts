import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class Api {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/api'; 

  // Usuarios
  registrarUsuario(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/registro`, datos);
  }

  loginUsuario(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios/login`, datos);
  }

  obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  // Libros
  obtenerLibros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/libros`);
  }

  crearLibro(Libro: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/libros`, Libro);
  }

  // Librerías
  obtenerLibrerias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/librerias`);
  }

  crearLibreria(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/librerias`, data);
  }
}
