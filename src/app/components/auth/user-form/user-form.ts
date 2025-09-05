import {Component, effect, inject, input, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Session} from '@services/utils/session';
import {RegisterData} from '@model/auth/RegisterData';
import {LocationPicker} from '@app/components/locations/location-picker/location-picker';
import {User} from '@model/auth/User';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule,
    LocationPicker,
    RouterLink
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {
  private service = inject(Session);
  readonly edit = input(false);
  readonly userToEdit = input<User | null>(null);
  editedUser = output<User>();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone : new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    latitude: new FormControl<number | null>(null, [Validators.required]),
    longitude: new FormControl<number | null>(null, [Validators.required]),
  })

  constructor() {
    effect(() => {
      if (this.edit()) this.editHandler();

    });
  }

  editHandler() {
    if (this.userToEdit()) {
      this.userForm.patchValue({
        name: this.userToEdit()?.name || '',
        phone: this.userToEdit()?.telephone || '',
        email: this.userToEdit()?.email || '',

      });
    }
  }
  onSubmit() {

    if (!this.edit()){
      this.service.register(this.getRegisterData());
    }else{
      this.editedUser.emit(this.getUserData());
    }
  }

  getUserData(): User {
    return {
     name: this.userForm.get('name')?.value || '',
      email: this.userForm.get('email')?.value || '',
      telephone: this.userForm.get('phone')?.value || '',
      role : this.userToEdit()?.role!,
      latitude: this.userForm.get('latitude')?.value || 0,
      longitude: this.userForm.get('longitude')?.value || 0,
    }
  }
  getRegisterData(): RegisterData {
    return {
      name: this.userForm.get('name')?.value || '',
      email: this.userForm.get('email')?.value || '',
      telephone: this.userForm.get('phone')?.value || '',
      password: this.userForm.get('password')?.value || '',
      latitude: this.userForm.get('latitude')?.value || 0,
      longitude: this.userForm.get('longitude')?.value || 0,
    }
  }

  onLocationSelected($event: { lat: number; lng: number; }) {
    this.userForm.patchValue({latitude: $event.lat})
    this.userForm.patchValue({longitude: $event.lng});
  }
}
