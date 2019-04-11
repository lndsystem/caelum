import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {
  readonly regexEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  private _isNewEmailFormOpen = false;

  email = new Email();
  emailList = [];

  constructor() { }

  ngOnInit() {
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    
    if(formEmail.invalid){
      formEmail.control.get('para').markAsTouched();
      formEmail.control.get('assunto').markAsTouched();
      return;
    }

    this.emailList.push(this.email);
    this.email = new Email();
    formEmail.resetForm();
    this.toggleNewEmailForm();
  }

}
