import {Component, inject, OnDestroy} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Session} from '@services/utils/session';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginData} from '@model/auth/LoginData';
import {MetaTagsService} from '@services/utils/meta-tags.service';
import {CanonicalUrlService} from '@services/utils/canonical-url.service';


@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export default class Login implements OnDestroy{
  private metadata = inject(MetaTagsService);
  private canonical = inject(CanonicalUrlService);
  private service = inject(Session);
  private router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor() {
    this.canonical.setCanonicalLink();
    this.metadata.addTitle('Red Social - MiMascota - Inicio Sesión');
  }

  ngOnDestroy(): void {
        this.metadata.defaultMetaTags();
    }

  submitForm(){
    this.service.login(this.getLoginData());
    this.router.navigateByUrl('/app/journals/all');
  }

  getLoginData(): LoginData{
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
