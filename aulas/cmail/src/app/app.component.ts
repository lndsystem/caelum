import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet><router-outlet>'
})
export class AppComponent {
<<<<<<< HEAD
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
=======
  
>>>>>>> branch 'master' of https://github.com/lndsystem/caelum.git
}
