export class User {
    id = '';
    nome = '';
    username = '';
    senha = '';
    telefone = '';
    avatar = '';
    criado:Date;
    atualizado:Date;

    constructor({ id, name, username, password, phone, avatar_url, created_at, updated_at }) {
        this.id = id;
        this.nome = name;
        this.username = username;
        this.senha = password;
        this.telefone = phone;
        this.avatar = avatar_url;
        this.criado = created_at;
        this.atualizado = updated_at;
    }
}