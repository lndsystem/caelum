import { HttpClient, HttpResponse } from '@angular/common/http';
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
          localStorage.setItem('cmail-token', response.token);
          return response;
        })
      );
  }
}
