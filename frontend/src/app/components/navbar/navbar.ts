import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  usuario: any = null;
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
  this.verificarSesion();

  window.addEventListener('storage', () => {
  this.verificarSesion();  });
  this.router.events.subscribe(() => this.verificarSesion());

  }

  verificarSesion() {
    this.isLoggedIn = !!localStorage.getItem('token');
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
    }
  }

logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  this.isLoggedIn = false;
   window.dispatchEvent(new Event('storage')); 
  this.router.navigate(['/login']);
}
}