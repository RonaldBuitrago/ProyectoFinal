import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-librerias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './librerias.html',
  styleUrls: ['./librerias.css']
})
export class LibreriasComponent implements OnInit {
  librerias: any[] = [];
  libreriaForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.libreriaForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.obtenerLibrerias();
  }

  obtenerLibrerias() {
    this.http.get('http://localhost:3000/api/librerias').subscribe((data: any) => {
      this.librerias = data;
    });
  }

  crearLibreria() {
    if (this.libreriaForm.valid) {
      this.http.post('http://localhost:3000/api/librerias', this.libreriaForm.value)
        .subscribe({
          next: () => {
            alert('Librería creada con éxito');
            this.libreriaForm.reset();
            this.obtenerLibrerias();
          },
          error: (err) => {
            console.error(err);
            alert('Error al crear librería');
          }
        });
    }
  }
}