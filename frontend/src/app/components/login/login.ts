import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {  
  form!: FormGroup;
  mensaje = '';

  constructor(private fb: FormBuilder, private api: Api, private router: Router) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.form.invalid) return;

    const credenciales = this.form.value;

    this.api.loginUsuario(credenciales).subscribe({
      next: (res: any) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('usuario', JSON.stringify(res.usuario));
          this.mensaje = 'Inicio de sesión exitoso.';
          
          //Redirigir al Dashboard
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 800);
        } else {
          this.mensaje = 'Credenciales inválidas.';
        }
      },
      error: () => {
        this.mensaje = 'Error al iniciar sesión.';
      }
  // onSubmit() {
  //   if (this.form.invalid) {
  //     this.mensaje = 'Por favor completa los campos correctamente.';
  //     return;
  //   }

  //   this.api.loginUsuario(this.form.value).subscribe({
  //     next: (res: any) => {
  //       localStorage.setItem('token', res.token);
  //       this.mensaje = 'Inicio de sesión exitoso.';
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       this.mensaje = 'Error al iniciar sesión.';
  //     }
    });
  }
}
