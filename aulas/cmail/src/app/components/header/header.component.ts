import { Component, OnInit } from "@angular/core";
import { LoginService } from '../../services/login.service';
import { PageDataService } from '../../services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent implements OnInit {

    constructor(private loginService: LoginService, private pageService: PageDataService, private headerService: HeaderService) {
        this.pageService.titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    tituloDaPagina = 'CMail';
    private _isMenuOpen = false;

    user = {
        email: 'pesso.al@cmail.br',
        name: 'Pessoa de Tal',
        avatarUrl: 'http://placehold.it/48x48',
        token: ''
    }

    ngOnInit(): void {
        if (localStorage.getItem('cmail-security')) {
            this.user = JSON.parse(localStorage.getItem('cmail-security'));
        }
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen;
    }

    logout() {
        this.loginService.logout();
    }

    handleBuscaChanges({ target }) {
        this.headerService.atualizarTermoDeFiltro(target.value)
    }
}