import {Component, inject, OnDestroy} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterData} from '@model/auth/RegisterData';
import {UserForm} from '@app/components/auth/user-form/user-form';
import {MetaTagsService} from '@services/utils/meta-tags.service';
import {CanonicalUrlService} from '@services/utils/canonical-url.service';

@Component({
  standalone:true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, UserForm],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export default class Register implements OnDestroy{
  private metadata = inject(MetaTagsService);
  private canonical = inject(CanonicalUrlService);
  constructor() {
    this.canonical.setCanonicalLink();
    this.metadata.addTitle('Red Social - MiMascota - Crear una cuenta');
  }

  ngOnDestroy(): void {
    this.metadata.defaultMetaTags();
  }

}
