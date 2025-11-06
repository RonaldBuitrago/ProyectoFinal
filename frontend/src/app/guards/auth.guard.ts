import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return true; // Tiene sesión activa
  } else {
    router.navigate(['/login']); //Sin sesión, redirigir al login
    return false;
  }
};
