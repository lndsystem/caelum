import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { LeituraDeEmailRoutingModule } from './leitura-de-email-routing.module';
import { LeituraDeEmailComponent } from './leitura-de-email.component';

@NgModule({
  declarations: [LeituraDeEmailComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    LeituraDeEmailRoutingModule,
  ]
})
export class LeituraDeEmailModule { }
