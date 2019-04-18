import { EmailDTO } from './../models/dto/output/emailDto';
import { map } from 'rxjs/operators';
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

  listar() {
    let security = JSON.parse(localStorage.getItem('cmail-security'));
    return this.http.get(this.url, { headers: new HttpHeaders({ 'Authorization': security.token }) }).pipe<EmailDTO[]>(
      map(
        (response: any[]) => {
          return response.map(
            emailApi => {
              return new EmailDTO(
                emailApi.to,
                emailApi.subject,
                //emailApi.content.replace(/(?:\r\n|\r|\n)/g, '<br />'),
                emailApi.content,
                emailApi.created_at,
                emailApi.id
              )
            }
          )
        }
      )
    );
  }

  deletar(id) {
    let security = JSON.parse(localStorage.getItem('cmail-security'));
    return this.http.delete(`${this.url}/${id}`, { headers: new HttpHeaders({ 'Authorization': security.token }) });
  }
}
