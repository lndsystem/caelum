export class Email {
    to: string;
    subject: string;
    content: string;

    constructor({ para, assunto, conteudo }) {
        this.to = para;
        this.subject = assunto;
        this.content = conteudo;
    }
}