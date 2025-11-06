import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Api } from '../../services/api';
import { LibreriasComponent } from '../librerias/librerias';
import { LibrosComponent } from '../libros/libros';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, LibreriasComponent, LibrosComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  totalUsuarios = 0;
  totalLibros = 0;
  totalLibrerias: number = 0;
  mensaje = '';

  constructor(private api: Api) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    // Obtener-usuarios
    this.api.obtenerUsuarios().subscribe({
      next: (usuarios: any[]) => {
        this.totalUsuarios = usuarios.length;
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
        this.mensaje = 'No se pudieron cargar los usuarios.';
      }
    });

    // Obtener-libros
    this.api.obtenerLibros().subscribe({
      next: (libros: any[]) => {
        this.totalLibros = libros.length;
      },
      error: (err) => {
        console.error('Error al obtener libros:', err);
        this.mensaje = 'No se pudieron cargar los libros.';
      }
    });

        // Obtener-librerias
    this.api.obtenerLibrerias().subscribe({
      next: (librerias: any[]) => {
        this.totalLibrerias = librerias.length;
      },
      error: (err) => {
        console.error('Error al obtener librerias:', err);
        this.mensaje = 'No se pudieron cargar las librerias.';
      }
    });
  }
}  
