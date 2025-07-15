import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Session} from '@services/utils/session';
import {RegisterInterface} from '@model/auth/register.interface';


@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export default class Register {
  private service = inject(Session);

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit()
  {
    console.log(this.getRegisterData());
    this.service.register(this.getRegisterData());
  }
  getRegisterData() : RegisterInterface {
    return {
      name: this.registerForm.get('name')?.value || '',
      email: this.registerForm.get('email')?.value || '',
      password: this.registerForm.get('password')?.value || ''
    }
  }
}
