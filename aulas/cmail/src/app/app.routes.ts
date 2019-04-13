import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';

const listaDeRotas: Routes = [
    //Carregando tudo
    /*{ path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:username', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'inbox', component: CaixaDeEntradaComponent },
    { path: '**', redirectTo: 'login'},*/

    //Carregando por demanda
    { path: 'inbox', loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule'},
    { path: 'cadastro', loadChildren: 'src/app/modules/cadastro.module#CadastroModule' },
    { path: '', loadChildren: 'src/app/modules/login.module#LoginModule' },
    { path: 'login', loadChildren: 'src/app/modules/login.module#LoginModule'},
    { path: 'login/:username', loadChildren: 'src/app/modules/login.module#LoginModule' },
    { path: '**', redirectTo: 'login'},
];

//Antigo, fuciona para tudos
//export const ModuloRoteamento = RouterModule.forRoot(listaDeRotas);


@NgModule({
    imports:[
        RouterModule.forRoot(listaDeRotas)
    ],
    exports:[
       RouterModule 
    ]
})
export class ModuloRoteamento{}