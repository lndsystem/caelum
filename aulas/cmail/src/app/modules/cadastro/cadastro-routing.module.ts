import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotulasDoModulo: Routes = [
  { path: '', component: CadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rotulasDoModulo)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroRoutingModule { }
