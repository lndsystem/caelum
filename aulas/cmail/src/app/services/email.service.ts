import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly url = 'http://localhost:3200/emails';

  constructor(private http: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }) {
    const emailDto = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }
    let security = JSON.parse(localStorage.getItem('cmail-security'));
    return this.http.post(this.url, emailDto, { headers: new HttpHeaders({ 'Authorization': security.token }) });
  }
}
