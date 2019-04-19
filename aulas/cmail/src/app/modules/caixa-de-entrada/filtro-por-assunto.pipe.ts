import { Pipe, PipeTransform } from '@angular/core';
import { EmailDTO } from '../../models/dto/output/emailDto';

@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssuntoPipe implements PipeTransform {
  transform(listaEmails: EmailDTO[], termoFiltro: string) {
    return listaEmails.filter(email => email.assunto.toLowerCase().includes(termoFiltro.toLowerCase()));
  }
}
