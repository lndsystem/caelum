export class EmailDTO {
    destinatario: '';
    assunto: '';
    conteudo: '';
    criado: '';
    id: '';

    constructor(to, subject, content, created_at, id) {
        this.destinatario = to;
        this.assunto = subject;
        this.conteudo = content;
        this.criado = created_at;
        this.id = id;
    }
}