import {Component, inject, OnDestroy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {ForumService} from '@http/forum-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {environment} from '@environments/environment.development';
import {MetaTagsService} from '@services/utils/meta-tags.service';
import {CanonicalUrlService} from '@services/utils/canonical-url.service';

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export default class Landing implements OnDestroy{
  private forumService = inject(ForumService);
  protected readonly environment = environment;
  private metaTags = inject(MetaTagsService);
  private canonicalUrl = inject(CanonicalUrlService);

  forumResource = rxResource({
    stream: ()=> this.forumService.getAll(),
  })

  constructor() {
    this.canonicalUrl.setCanonicalLink();
    this.metaTags.defaultMetaTags();
  }
  ngOnDestroy() {
    this.forumResource.destroy();
  }

}
