import {Component, inject, input} from '@angular/core';
import {PostForm} from '@app/components/posts/post-form/post-form';
import {Router} from '@angular/router';


@Component({
  selector: 'app-post-new',
  imports: [
    PostForm
  ],
  templateUrl: './post-new.html',
  styleUrl: './post-new.scss'
})
export default class PostNew {
  readonly slug = input.required<string>();
  private router = inject(Router);
  onSubmitHandler()
  {
    this.router.navigateByUrl('post/by/user/all');
  }
}
