import {AfterViewInit, Component, computed, effect, inject, input, linkedSignal, OnDestroy} from '@angular/core';
import {ForumService} from '@http/forum-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {ForumDetail} from '@app/components/forums/forum-detail/forum-detail';
import {PostList} from '@app/components/posts/post-list/post-list';
import {of} from 'rxjs';
import {LocationService} from '@http/location-service';
import {Location} from '@model/model/location';
import {ApiResponse} from '@model/ApiResponse';
import {Pagination} from '@app/components/shared/pagination/pagination';
import {ForumSkeleton} from '@app/components/forums/forum-skeleton/forum-skeleton';
import {PostSkeleton} from '@app/components/posts/post-skeleton/post-skeleton';
import {Session} from '@services/utils/session';
import {EventService} from '@services/context/event-service';
import {AuthService} from '@http/auth.service';
import {UserContext} from '@services/context/user-contenxt';
import {MetaTagsService} from '@services/utils/meta-tags.service';
import {CanonicalUrlService} from '@services/utils/canonical-url.service';


@Component({
  selector: 'app-forum-view',
  imports: [
    ForumDetail,
    PostList,
    Pagination,
    ForumSkeleton,
    PostSkeleton
  ],
  templateUrl: './forum-view.html',
  styleUrl: './forum-view.scss'
})
export default class ForumView implements OnDestroy{
  private metadata = inject(MetaTagsService);
  private canonical = inject(CanonicalUrlService);
  private service = inject(ForumService);
  private session = inject(Session);
  private locationService = inject(LocationService);
  private eventService = inject(EventService);
  readonly slug = input.required<string>();
  readonly page = input.required<number>();
  readonly limit = input.required<number>();
  readonly locationSlug = input<string>();

  currentPage = linkedSignal(() => Number(this.page()) || 1);
  currentLimit = linkedSignal(() => Number(this.limit()) || 10);
  reload = computed(() => this.eventService.getEvents()());
  editable = computed(()=>this.session.$admin());
  forumResource = rxResource(
    {
      params : ()=>{ return {slug : this.slug()}},
      stream: ({params}) => this.service.forumGetBySlug(params.slug)
    }
  );

  postsResource = rxResource({
    params: () => { return {
      slug: this.slug(),
      page : this.currentPage(),
      limit: this.currentLimit(),
      location: this.locationSlug()
    } },
    stream: ({params}) => {
      if (params.location === undefined){
        return this.service.getPosts(params.slug, params.page, params.limit)
      }else{
        return this.service.getPostsByLocation(params.slug, params.page, params.limit, params.location);
      }
    }
  })

  locationResource = rxResource({
    params : () => { return {locationId: this.locationSlug()! } },
    stream: ({params}) => {
      if (params.locationId === undefined){
        return of({
          data: null,
          message: 'No location specified',
          success: true
        } as ApiResponse<Location | null>);
      }else{
        return this.locationService.getLocationById(params.locationId!)
      }
    }
  });
  constructor() {
    effect(()=>{
      const reloadEvents = this.reload();
      if(
        Array.isArray(reloadEvents)
        && reloadEvents.length > 0
        && reloadEvents[reloadEvents.length - 1].action === 'update'
        && reloadEvents[reloadEvents.length - 1].entity === 'post'
      ){
        this.postsResource.reload();
      }
      if (!this.forumResource.isLoading()){
        const forum = this.forumResource.value()!.data!;
        this.metadata.addTitle(`Red Social - Mi Mascota - Foro: ${forum.name}`);
        this.metadata.addDescriptionMetaTag(forum.description);
        this.canonical.setCanonicalLink();
      }
    })

  }

  ngOnDestroy(): void {
     this.metadata.defaultMetaTags();
     this.forumResource.destroy();
     this.locationResource.destroy();

    }

  changePage($event: number)
  {
    this.currentPage.set($event);
  }
}
