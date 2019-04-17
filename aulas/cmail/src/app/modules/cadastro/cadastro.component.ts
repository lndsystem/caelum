import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { User } from "src/app/models/dto/input/user";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  nome = new FormControl('', [Validators.required, Validators.minLength(2)]);
  telefone = new FormControl('', [Validators.required, Validators.pattern('\\d{4,5}\\-\\d{4}'), Validators.minLength(8), Validators.maxLength(10)])
  avatar = new FormControl('', Validators.required, this.validaAvatar.bind(this));

  formCadastro = new FormGroup({
    nome: this.nome,
    username: new FormControl(),
    senha: new FormControl(),
    telefone: this.telefone,
    avatar: this.avatar
  });

  constructor(private httpClient: HttpClient, private servico: UserService, private route: Router) { }

  ngOnInit() {
  }

  handleCadastroUsuario() {
    if (this.formCadastro.invalid) {
      // for(let propName in this.formCadastro.value){
      //   this.validar(propName);
      // }
      /*
        Object.keys(this.formCadastro.value).forEach(field => {
          console.log(field);
        })
      */
      this.validarTodosCampos(this.formCadastro);
      return;
    }

    //const userData = new User(this.formCadastro.value);
    //const uname = this.formCadastro.get('username').value;

    //Api SpringBoot
    //this.httpClient.post('http://localhost:8080/users', this.formCadastro.value).subscribe();

    this.servico.cadastro(this.formCadastro.value).subscribe(
      (response:any) => this.route.navigate(['login/', response.email]),
      erro => console.log(erro)
    );

    // this.httpClient.post('http://localhost:3200/users', userData).subscribe(
    //   (response) => {
    //     //console.log('Cadastro com sucesso! ' + this.formCadastro.get('username').value);
    //     //this.formCadastro.reset();

    //     //setTimeout(()=>{
    //     this.route.navigate(['login', this.formCadastro.get('username').value]);
    //     //}, 1000);
    //   }, erro => console.log(erro)
    //   , () => console.log('complete')
    // );

    /*
      subscribe retorna 3 resposta
      subscribe((SUCESSO) => 
        {
          return SUCESSO
        }, (ERROR) => {
          return ERROR
        }, () => { //se deu sucesso executa o complete

        }
      )
    */
    //this.formCadastro.reset();
  }

  // validar(campo: string){
  //   if(this.formCadastro.get(campo).invalid){
  //     this.formCadastro.get(campo).markAsTouched();
  //   }
  // }

  validarTodosCampos(form: FormGroup) {
    for (let propName in form.value) {
      if (form.get(propName).invalid) {
        form.get(propName).markAsTouched();
      }
    }
  }

  validaAvatar(controle: FormControl) {
    return this.httpClient.head(controle.value, { observe: 'response' })
      .pipe(
        map((resposta: HttpResponseBase) => { return resposta.ok ? null : { urlInvalida: true } }),
        catchError((error) => { return [{ urlInvalida: true }] })
      );
    //return new Observable<Object>();
    //return new Promise(resolve => resolve);
  }
}
