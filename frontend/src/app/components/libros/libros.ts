import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../services/api';


@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './libros.html',
  styleUrls: ['./libros.css']
})
export class LibrosComponent implements OnInit {  
  libroForm!: FormGroup;
  libros: any[] = [];
  editando = false;
  libroEditandoId: string | null = null;
  mensaje = '';
    
  constructor(private fb: FormBuilder, private api: Api,  private http: HttpClient) {}

  ngOnInit() { 
  this.cargarLibros();    
  this.libroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      autor: ['', [Validators.required]],
      tema: ['', [Validators.required]]
    });

    this.obtenerLibros();
  }
  obtenerLibros() {
  this.api.obtenerLibros().subscribe({
    next: (data) => this.libros = data,
    error: (err) => console.error(err)
  });
} 

  cargarLibros() {
    this.http.get('http://localhost:3000/api/libros').subscribe((data: any) => {
      this.libros = data;
    });
  }

  agregarLibro() {
 if (this.libroForm.invalid) return;

    if (this.editando && this.libroEditandoId) {
      // ACTUALIZAR
      this.http.put(`http://localhost:3000/api/libros/${this.libroEditandoId}`, this.libroForm.value)
        .subscribe({
          next: () => {
            alert('Libro actualizado correctamente');
            this.cancelarEdicion();
            this.cargarLibros();
          },
          error: (err) => {
            console.error(err);
            alert('Error al actualizar el libro.');
          }
        });
    } else {
      // CREAR
      this.http.post('http://localhost:3000/api/libros', this.libroForm.value)
        .subscribe({
          next: () => {
            alert('Libro agregado correctamente');
            this.libroForm.reset();
            this.cargarLibros();
          },
          error: (err) => {
            console.error(err);
            alert('Error al agregar libro.');
          }
        });
    }
  }

  editarLibro(libro: any) {
    this.editando = true;
    this.libroEditandoId = libro._id;
    this.libroForm.patchValue({
      titulo: libro.titulo,
      tema: libro.tema,
      autor: libro.autor
    });
  }

  cancelarEdicion() {
    this.editando = false;
    this.libroEditandoId = null;
    this.libroForm.reset();
  }

  eliminarLibro(id: string) {
    if (confirm('¿Seguro que deseas eliminar este libro?')) {
      this.http.delete(`http://localhost:3000/api/libros/${id}`).subscribe({
        next: () => {
          alert('Libro eliminado correctamente');
          this.cargarLibros();
        },
        error: (err) => {
          console.error(err);
          alert('Error al eliminar libro.');
        }
      });
    }
  }
}