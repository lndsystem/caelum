import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api: string = 'http://localhost:3200/login';

  constructor(private httpClient: HttpClient) { }

  logar(dadosLogin) {
    return this.httpClient.post(this.api, dadosLogin)
      .pipe(
        map((response: any) => {
          localStorage.setItem('cmail-security',  JSON.stringify(response));
          return response;
        })
      );
  }

  logout() {
    console.log('SERVICE - desconectar');
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).startsWith('cmail-')) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  }
}
