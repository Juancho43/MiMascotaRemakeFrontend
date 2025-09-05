import {Component, computed, effect, inject, input, output, signal} from '@angular/core';
import {PostService} from '@http/post-service';
import {Post} from '@model/model/post';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JournalContextService} from '@services/context/journal-context-service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {OverlayService} from '@services/utils/overlay.service';
import {LocationList} from '@app/components/locations/location-list/location-list';
import {LocationContext} from '@services/context/location-context';
import {Location} from '@model/model/location';

@Component({
  selector: 'app-post-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CdkTextareaAutosize,
  ],
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss'
})
export class PostForm {

  private service = inject(PostService);
  private journalContext = inject(JournalContextService);
  readonly isEdit = input<boolean>(false);
  readonly postToEdit = input<Post>();
  readonly forumSlug = input<string>('');
  private overlay = inject(OverlayService);
  private locationContext = inject(LocationContext);
   location = computed(()=> this.locationContext.getLocation()());
  journal = signal(this.journalContext.getJournal())
  submitted = output<boolean>();
  postForm = new FormGroup({
    title : new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(50) ]),
    content: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(255) ]),
    forum_slug: new FormControl(),
    animal_id: new FormControl(),
  })

  constructor() {
    effect(() => {

      if (this.isEdit()) {this.onEditHandler()}
    });
  }
  onSubmit(){
    if (!this.isEdit()){
      this.service.create(this.toPost()).subscribe();
    }else {
      this.service.update(this.toPost()).subscribe();
    }
    this.submitted.emit(true);
  }

  onEditHandler(){
    this.postForm.patchValue({
      title: this.postToEdit()!.title!,
      content: this.postToEdit()!.content!,
    })
  }

  toPost() : Post{
    let journal = this.journal();
    return {
      id: this.postToEdit()?.id,
      title: this.postForm.get('title')!.value!,
      content: this.postForm.get('content')!.value!,
      animal_id: journal && journal().animal! ? journal().animal.id! : '',
      forum_slug: this.forumSlug() ?? '',
      location_id: this.location() ? this.location().id! : ''
    }
  }


  openSearchLocation() {
    this.overlay.open(LocationList,this.overlay.createTopPositionStrategy());
  }

  removeLocation() {
    this.locationContext.setLocation({} as Location);
  }
}
