import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('cmail-security')) {
      return true;
    } else {
      this.roteador.navigate(['']);
      return false;
    }
  }
}
