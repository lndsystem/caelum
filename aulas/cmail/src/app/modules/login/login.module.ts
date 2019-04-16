import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { LoginRoutingModule } from "src/app/modules/login/login-routing.module";
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
