import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm, NgModel } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { EmailDTO } from 'src/app/models/dto/output/emailDto';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [
    `ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }`]
})
export class CaixaDeEntradaComponent implements OnInit {
  readonly regexEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  private _isNewEmailFormOpen = false;

  email = new Email();
  emailList = [];

  constructor(private servico: EmailService) { }

  ngOnInit() {
    this.servico.listar().subscribe(lista => {
      this.emailList = lista;
    });
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) {
      formEmail.control.get('para').markAsTouched();
      formEmail.control.get('assunto').markAsTouched();
      return;
    }

    this.servico.enviar(this.email).subscribe((email: any) => {
      email = new EmailDTO(email.to, email.subject, email.content, email.created_at);
      this.emailList.unshift(email);
      this.email = new Email();
      formEmail.resetForm();
      this.toggleNewEmailForm();
    },
      erro => console.log(erro)
    );


  }

}
