import { Component } from '@angular/core';
import { Email } from './models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: '<router-outlet><router-outlet>'
})
export class AppComponent {
  readonly regexEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  private _isNewEmailFormOpen = false;
  
  email = new Email();
  emailList = [];


  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {    
    this.emailList.push(this.email);
    this.email = new Email();
    formEmail.resetForm();
    this.toggleNewEmailForm();
  }
}
