import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeituraDeEmailComponent } from './leitura-de-email.component';

const rotasDoModulo: Routes = [
  { path: '', component: LeituraDeEmailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rotasDoModulo)
  ],
  exports: [
    RouterModule
  ]
})
export class LeituraDeEmailRoutingModule { }
