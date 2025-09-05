import {Component, effect, inject, input} from '@angular/core';
import {Forum} from '@model/model/forum';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ForumService} from '@http/forum-service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {NgOptimizedImage} from '@angular/common';
import {environment} from '@environments/environment.development';

@Component({
  selector: 'app-forum-form',
  imports: [
    ReactiveFormsModule,
    CdkTextareaAutosize,
    NgOptimizedImage,

  ],
  templateUrl: './forum-form.html',
  styleUrl: './forum-form.scss'
})
export class ForumForm {
  readonly forumToEdit = input<Forum>();
  readonly isEdit = input<boolean>(false);
  private service = inject(ForumService);
  icon : File | null = null;
  forumForm = new FormGroup({
    name : new FormControl(),
    description : new FormControl(),
  })

  constructor() {
    effect(() => {
      if (this.isEdit()) this.onEditHandler();
    });
  }

  onEditHandler(){
    this.forumForm.patchValue({
      name:this.forumToEdit()?.name,
      description: this.forumToEdit()?.description
    })
  }
  onSubmit() {

    if (!this.isEdit()){
      this.service.create(this.toForum()).subscribe();
    }else{
      this.service.edit(this.toForum()).subscribe();
    }
  }

  toForum() : Forum{
    return {
      id : this.forumToEdit()?.id! ?? null,
      slug : this.forumToEdit()?.slug! ?? null,
      name: this.forumForm.get('name')?.value!,
      description: this.forumForm.get('description')?.value!,
    };
  }

 onFileSelected($event: Event) {
   const input = $event.target as HTMLInputElement;
   this.icon = input.files && input.files[0];
 }

  changeImage() {
    const file = this.icon!;
    const id = this.forumToEdit()!.id!;
    if (id && file){
    this.service.addImage(id, file).subscribe();

    }
  }

  deleteImage() {
    const id = this.forumToEdit()!.id!;
    if (id) {
      this.service.deleteImage(id).subscribe();
    }
  }

  protected readonly environment = environment;
}
