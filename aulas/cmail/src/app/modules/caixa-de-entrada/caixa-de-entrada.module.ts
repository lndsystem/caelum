import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FiltroPorAssuntoPipe } from './filtro-por-assunto.pipe';

@NgModule({
  declarations: [CaixaDeEntradaComponent, ListItemComponent, FiltroPorAssuntoPipe],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ]
})
export class CaixaDeEntradaModule { }