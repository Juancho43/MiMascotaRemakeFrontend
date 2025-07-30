import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large', ...args: unknown[]): unknown {
    switch (value) {
      case 'extra-small':
        return 'Diminuto';
      case 'small':
        return 'Pequeño';
      case 'medium':
        return 'Medio';
      case 'large':
        return 'Grande';
      case 'extra-large':
        return 'Enorme';
      default:
        return value;
    }
  }

}
