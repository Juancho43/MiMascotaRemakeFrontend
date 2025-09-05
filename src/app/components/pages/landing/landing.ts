import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {ForumService} from '@http/forum-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {environment} from '@environments/environment.development';

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export default class Landing {
  private forumService = inject(ForumService);
  forumResource = rxResource({
    stream: ()=> this.forumService.getAll(),
  })
  protected readonly environment = environment;
}
