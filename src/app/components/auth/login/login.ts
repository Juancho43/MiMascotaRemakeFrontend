import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Session} from '@services/utils/session';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginInterface} from '@model/auth/login.interface';


@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export default class Login {
  private service = inject(Session);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  submitForm(){
    this.service.login(this.getLoginData());
  }

  getLoginData(): LoginInterface{
    return {
      email: this.loginForm.get('email')?.value || '',
      password: this.loginForm.get('password')?.value || ''
    }
  }
  showPassword()
  {

    // let tipo = document.getElementById("password")!;
    // let ojo = document.getElementById("ojo")!;
    // if(tipo.type == "password"){
    //   tipo.type = "text";
    //   ojo.innerText = "visibility_off";
    // }else{
    //   tipo.type = "password";
    //   ojo.innerText = "visibility";
    // }
  }
}
