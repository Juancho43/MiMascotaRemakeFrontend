import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Session} from '@services/utils/session';

@Component({
  selector: 'app-validate',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './validate.html',
  styleUrl: './validate.scss'
})
export default class Validate {
  private sesion  = inject(Session);
  code = signal('');
  email = signal('');
  validate() {
    this.sesion.validate(this.code(), this.email());
  }

}
