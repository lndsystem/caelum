import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const rotulaDoModulo: Routes = [
  { path: '', component: LoginComponent },
  { path: '/:username', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(rotulaDoModulo)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
