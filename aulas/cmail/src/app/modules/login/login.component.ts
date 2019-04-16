import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  mensagemErro = {
    message: ''
  }

  constructor(private rotaAtivada: ActivatedRoute, private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    //this.username = this.rotaAtivada.snapshot.params.username;

    //console.log(this.rotaAtivada.snapshot.params.username);
    //console.log('-')
    //this.rotaAtivada.params.subscribe((parans) => console.log(parans.username));
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.invalid) {
      for (let item in formLogin.controls) {
        formLogin.controls[item].markAsTouched();
      }
      return;
    }

    this.loginService
      .logar(this.login)
      .subscribe(
        () => this.route.navigate(['inbox']),
        (httpError: HttpErrorResponse) => this.mensagemErro.message = httpError.error.message
      );


    // this.httpClient.post('http://localhost:3200/login', this.login)
    //   .subscribe((response: any) => {
    //     localStorage.setItem('cmail-token', response.token);
    //     this.route.navigate(['..', 'inbox']);
    //   },
    //     (error: HttpErrorResponse) => {
    //       this.mensagemErro.message = error.error.message;
    //     });
  }
}
