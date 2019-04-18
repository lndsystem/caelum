import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeEmail(click: Event) {
    Swal.fire({
      title: 'Confirmar a exclusão?',
      text: 'Você tem certeza que quer excluir o e-mail!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your imaginary file has been deleted.',
        //   'success'
        // )
        this.vaiRemover.emit({ status: 'removing' })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire(
        //   'Cancelled',
        //   'Your imaginary file is safe :)',
        //   'error'
        // )
      }
    })
    // Swal.fire('Tem certeza?').then(
    //   (res) => {
    //     if(res.value){  
    //       this.vaiRemover.emit({ status: 'removing' })
    //     }
    //   }
    // )
    // if (confirm('Tem certeza?')) {
    //   this.vaiRemover.emit({ status: 'removing' });
    // }
  }
}
