import { Component, OnInit } from "@angular/core";
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent implements OnInit {

    constructor(private loginService: LoginService) { }

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



    private _isMenuOpen = false;
    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen;
    }

    logout() {
        this.loginService.logout();
    }

}