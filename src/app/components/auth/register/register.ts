import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Session} from '@services/utils/session';
import {RegisterData} from '@model/auth/RegisterData';
import {LocationPicker} from '@app/components/shared/location-picker/location-picker';

@Component({
  standalone:true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, LocationPicker],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export default class Register {
  private service = inject(Session);
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone : new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    latitude: new FormControl<number | null>(null, [Validators.required]),
    longitude: new FormControl<number | null>(null, [Validators.required]),
  })

  onSubmit() {

    this.service.register(this.getRegisterData());
  }

  getRegisterData(): RegisterData {
    return {
      name: this.registerForm.get('name')?.value || '',
      email: this.registerForm.get('email')?.value || '',
      telephone: this.registerForm.get('phone')?.value || '',
      password: this.registerForm.get('password')?.value || '',
      latitude: this.registerForm.get('latitude')?.value || 0,
      longitude: this.registerForm.get('longitude')?.value || 0,
    }
  }

  onLocationSelected($event: { lat: number; lng: number; }) {
    this.registerForm.patchValue({latitude: $event.lat})
    this.registerForm.patchValue({longitude: $event.lng});
  }

}
