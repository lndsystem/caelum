import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: ['label {text-transform: capitalize}']
})
export class FormGroupComponent implements OnInit {

  @Input('ident') idCampo = '';
  @Input('message') mensagem = '';
  @Input('messages') mensagens;
  @Input('ctrl') controle: FormGroup;
  @Input('ctrlNg') controleNg: NgModel;

  formControl: AbstractControl;

  constructor() { }

  ngOnInit() {
    //this.formControl = this.controle.controls[this.idCampo];
  }

  getControle(): boolean {
    if (this.controleNg)
      return this.controleNg.touched && this.controleNg.invalid;
    return this.controle.get(this.idCampo).touched && this.controle.get(this.idCampo).invalid;
  }

  getRequired(): boolean {
    if (this.controleNg)
      return this.controleNg.getError('required');
    return this.controle.get(this.idCampo).getError('required');
  }

  // getMessage(): string {
  //   for (let erro in this.mensagens)
  //     if (this.formControl.getError(erro))
  //       return this.mensagens[erro];
  //   return 'Campo obrigatório e/ou inválido.';
  // }
}
