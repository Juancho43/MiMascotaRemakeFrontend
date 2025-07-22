import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  readonly route = input.required<string>();
  readonly label = input<string>();
  readonly icon = input<string>();
}
