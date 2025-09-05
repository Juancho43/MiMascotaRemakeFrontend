import {Component, inject} from '@angular/core';
import {ForumService} from '@http/forum-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {Button} from '@app/components/shared/button/button';

@Component({
  selector: 'app-forum-all',
  imports: [
    Button
  ],
  templateUrl: './forum-all.html',
  styleUrl: './forum-all.scss'
})
export default class ForumAll {
  private service = inject(ForumService);
  forumsResource = rxResource({
    stream: () => this.service.getAll()
  });
}
