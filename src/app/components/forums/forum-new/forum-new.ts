import {Component} from '@angular/core';
import {ForumForm} from '@app/components/forums/forum-form/forum-form';

@Component({
  selector: 'app-forum-new',
  imports: [
    ForumForm
  ],
  templateUrl: './forum-new.html',
  styleUrl: './forum-new.scss'
})
export default class ForumNew {

}
