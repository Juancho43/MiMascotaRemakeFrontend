import {Component, computed, effect, inject} from '@angular/core';
import {PostService} from '@http/post-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {PostList} from '@app/components/posts/post-list/post-list';
import {EventService} from '@services/context/event-service';

@Component({
  selector: 'app-user-posts',
  imports: [
    PostList
  ],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss'
})
export default class UserPosts {
  private service = inject(PostService);
  private eventService = inject(EventService);
  reload = computed(()=> this.eventService.getEvents()());
  postsResponse = rxResource(
    {
      stream : () => this.service.getAllUserPosts(),
    }
  );

  constructor() {
    effect(()=>{
      this.reload();
      const reloadEvents = this.reload();
     if (reloadEvents.length > 0 && reloadEvents[reloadEvents.length - 1].entity === 'post') {
       this.postsResponse.reload();
     }
    })
  }

}
