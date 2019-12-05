import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { PhotographyComponent } from './photography/photography.component';
import { DesignComponent } from './design/design.component';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { TimelineCardComponent } from './shared/timeline/timeline-card/timeline-card.component';
import { SafePipe } from './shared/safe.pipe';

export const routes: Route[] = [
  {
    path: 'web-development',
    component: WebDevelopmentComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
  {
    path: 'design',
    component: DesignComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SidebarComponent,
    MenuBarComponent,
    WebDevelopmentComponent,
    PhotographyComponent,
    DesignComponent,
    TimelineComponent,
    TimelineCardComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgVerticalTimelineModule,
    NgxMasonryModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
