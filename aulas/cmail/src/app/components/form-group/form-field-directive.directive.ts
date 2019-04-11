import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective {
  
  constructor(private elemento: ElementRef) {
  }

  ngOnInit() {
    const campo:HTMLInputElement = this.elemento.nativeElement;
    campo.classList.add('mdl-textfield__input');
    campo.placeholder=' ';
    if(campo.name){
      campo.id = campo.name;
    }else{
      throw new Error('O atributo name deve ser informado!')
    }

  }
}
