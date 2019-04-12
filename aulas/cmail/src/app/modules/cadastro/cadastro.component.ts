import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

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
    this.formCadastro.reset();
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
