import {Component, inject, input} from '@angular/core';
import {ReportsService} from '@http/reports-service';
import {rxResource} from '@angular/core/rxjs-interop';
import {ReportedPost} from '@app/components/posts/reported-post/reported-post';

@Component({
  selector: 'app-forum-reports',
  imports: [
    ReportedPost
  ],
  templateUrl: './forum-reports.html',
  styleUrl: './forum-reports.scss'
})
export default class ForumReports {
  private service = inject(ReportsService);
  readonly slug = input.required<string>();
  readonly locationSlug = input.required<string>();
  readonly page = input.required<number>();
  readonly limit = input.required<number>();
  reportsResource = rxResource({
   params:()=>{return{
     slug:this.slug(),
     location: this.locationSlug(),
     page: this.page(),
     limit: this.limit()
   }} ,
    stream: ({params}) => this.service.getReports({
      forumSlug:params.slug,
      locationSlug:params.location,
      page:params.page,
      limit:params.limit
    })
  })
}
