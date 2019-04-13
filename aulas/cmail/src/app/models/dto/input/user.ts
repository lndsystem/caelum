export class User {
    private name = '';
    private username = '';
    private password = '';
    private phone = '';
    private avatar = '';

    //object destructuring

    constructor({ nome, username, senha, telefone, avatar }) {
        this.name = nome;
        this.username = username;
        this.password = senha;
        this.phone = telefone;
        this.avatar = avatar;
    }
}