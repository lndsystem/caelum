import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/dto/input/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = 'http://localhost:3200/users';

  constructor(private http: HttpClient) { }

  cadastro(dadosForm) {
    const user = new User(dadosForm);
    return this.http.post(this.url, user);
  }

}