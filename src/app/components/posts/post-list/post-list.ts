import {Component, input} from '@angular/core';
import {Post} from '@model/model/post';
import {PostItem} from '@app/components/posts/post-item/post-item';

@Component({
  selector: 'app-post-list',
  imports: [
    PostItem
  ],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostList {
  readonly posts = input.required<Post[]>();
  readonly owner = input(false);


}
