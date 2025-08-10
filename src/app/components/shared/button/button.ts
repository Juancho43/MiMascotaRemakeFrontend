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
  standalone: true,
  styleUrl: './button.scss'
})
export class Button {
  readonly tooltip = input<string>();
  readonly route = input<string>();
  readonly label = input<string>();
  readonly icon = input<string>();
}
