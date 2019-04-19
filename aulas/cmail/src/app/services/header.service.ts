import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  valorDoFiltro = new EventEmitter<string>();
  constructor() {
    this.atualizarTermoDeFiltro('');
  }

  atualizarTermoDeFiltro(novoValor: string) {
    this.valorDoFiltro.emit(novoValor);
  }
}
