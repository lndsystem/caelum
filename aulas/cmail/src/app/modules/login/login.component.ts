import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  username = '';

  constructor(private rotaAtivada: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.rotaAtivada.snapshot.params.username;
    //console.log(this.rotaAtivada.snapshot.params.username);
    //console.log('-')
    //this.rotaAtivada.params.subscribe((parans) => console.log(parans.username));
  }

}
