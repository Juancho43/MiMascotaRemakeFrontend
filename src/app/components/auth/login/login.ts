import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export default class Login {


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
