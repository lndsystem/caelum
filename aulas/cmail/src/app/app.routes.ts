import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';

const listaDeRotas: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', redirectTo: 'login'}
];

export const ModuloRoteamento = RouterModule.forRoot(listaDeRotas);