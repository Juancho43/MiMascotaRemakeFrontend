import {Component, inject, input} from '@angular/core';
import {ForumService} from '@http/forum-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {ForumForm} from '@app/components/forums/forum-form/forum-form';

@Component({
  selector: 'app-forum-edit',
  imports: [
    ForumForm
  ],
  templateUrl: './forum-edit.html',
  styleUrl: './forum-edit.scss'
})
export default class ForumEdit {

  private forumService = inject(ForumService);
  readonly slug = input.required<string>();
  forumResource = rxResource({
    params:()=>{return{slug:this.slug()}},
    stream:({params}) =>{return this.forumService.forumGetBySlug(params.slug)}
  })

}
