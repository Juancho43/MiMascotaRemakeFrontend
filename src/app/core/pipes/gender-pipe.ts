import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: 'male' | 'female', ...args: unknown[]): unknown {
    if (value === 'male') {
      return 'Macho';
    }
    if (value ==='female'){
      return 'Hembra';
    }

    return value;
  }

}
