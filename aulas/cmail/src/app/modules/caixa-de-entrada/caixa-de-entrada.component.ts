import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm, NgModel } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { EmailDTO } from 'src/app/models/dto/output/emailDto';
import { PageDataService } from '../../services/page.service';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul {
      width: 100%;
    }
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }`]
})
export class CaixaDeEntradaComponent implements OnInit {
  readonly regexEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  private _isNewEmailFormOpen = false;

  termoParaFiltro = '';
  tituloDaPagina = "Inbox";
  email = new Email();
  emailList = [];

  constructor(private servico: EmailService, private pageService: PageDataService,
    private headerService: HeaderService, private route: Router) { }

  ngOnInit() {
    this.servico.listar().subscribe(lista => {
      this.emailList = lista.sort((a, b) => a.criado.localeCompare(b.criado) * -1);
    });
    this.pageService.definirTitulo('Caixa de entrada - CMail');
    this.headerService.valorDoFiltro.subscribe(novoValor => this.termoParaFiltro = novoValor)
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
      email = new EmailDTO(email.to, email.subject, email.content, email.created_at, email.id);
      console.log('add email --')
      this.emailList.unshift(email);
      console.log('add email ++')
      this.email = new Email();
      formEmail.resetForm();
      this.toggleNewEmailForm();
    },
      erro => console.log(erro)
    );
  }

  handleRemoveEmail(eventoVaiRemover, emailId) {
    if (eventoVaiRemover.status === 'removing') {
      this.servico
        .deletar(emailId)
        .subscribe(
          res => {
            this.emailList = this.emailList.filter(email => email.id != emailId).sort((a, b) => a.criado.localeCompare(b.criado) * -1)
          },
          err => console.error(err)
        )
    }
  }

  openEmail(event, emailId) {
    console.log(event);
    console.log(emailId);

    this.route.navigate(['ler', emailId]);
  }

  filtarEmails() {
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();
    return this.emailList.filter(email => {
      return email.assunto.toLowerCase().includes(termoParaFiltroEmMinusculo)
        || email.conteudo.toLowerCase().includes(termoParaFiltroEmMinusculo)
        || email.destinatario.toLowerCase().includes(termoParaFiltroEmMinusculo);
    })
  }
}
