import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export default class Landing {

}
