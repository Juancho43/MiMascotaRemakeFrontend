import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterData} from '@model/auth/RegisterData';
import {UserForm} from '@app/components/auth/user-form/user-form';

@Component({
  standalone:true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, UserForm],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export default class Register {


}
