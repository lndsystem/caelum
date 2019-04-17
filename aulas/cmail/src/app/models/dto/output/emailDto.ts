export class EmailDTO {
    destinatario: '';
    assunto: '';
    conteudo: '';
    criado: '';

    constructor(to, subject, content, created_at) {
        this.destinatario = to;
        this.assunto = subject;
        this.conteudo = content;
        this.criado = created_at;
    }
}