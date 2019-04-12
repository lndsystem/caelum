import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: ['label {text-transform: capitalize']
})
export class FormGroupComponent implements OnInit {

  @Input('ident') idCampo = '';
  @Input('message') mensagem = '';
  @Input('ctrl') controle: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  getControle():boolean {
    return this.controle.get(this.idCampo).touched && this.controle.get(this.idCampo).invalid;
  }

  getRequired():boolean {
    return this.controle.get(this.idCampo).getError('required');
  }
}
