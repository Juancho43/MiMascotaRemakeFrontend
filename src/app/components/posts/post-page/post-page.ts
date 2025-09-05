import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BackButton} from '@app/components/shared/back-button/back-button';

@Component({
  selector: 'app-post-page',
  imports: [
    RouterOutlet,
    BackButton
  ],
  templateUrl: './post-page.html',
  styleUrl: './post-page.scss'
})
export default class PostPage {

}
