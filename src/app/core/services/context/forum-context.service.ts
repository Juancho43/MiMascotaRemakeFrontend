import {Injectable, signal} from '@angular/core';
import {Forum} from '@model/model/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumContext {
  private forum = signal<Forum>({} as Forum);

  setForum(forum: Forum): void {
    this.forum.set(forum);
  }
  getForum() {
    return this.forum;
  }
}
