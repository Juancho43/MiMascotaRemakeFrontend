import {Component, inject, input} from '@angular/core';
import {PostForm} from '@app/components/posts/post-form/post-form';
import {rxResource} from '@angular/core/rxjs-interop';
import {PostService} from '@http/post-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-edit',
  imports: [
    PostForm
  ],
  templateUrl: './post-edit.html',
  styleUrl: './post-edit.scss'
})
export default class PostEdit {
  private service = inject(PostService);
  private router = inject(Router);
  readonly id = input.required<string>();
  postResource = rxResource({
    params:()=>{return{id:this.id()}},
    stream:({params})=>{ return this.service.getPost(params.id)}
  })
  onSubmitHandler()
  {
    this.router.navigateByUrl('post/by/user/all');
  }

}
