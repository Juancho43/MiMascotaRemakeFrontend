import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterData} from '@model/auth/RegisterData';
import {UserForm} from '@app/components/auth/user-form/user-form';

@Component({
  standalone:true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, UserForm],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export default class Register {


}
