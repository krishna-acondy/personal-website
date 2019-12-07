import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';
import { NgxMasonryModule } from 'ngx-masonry';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { PhotographyComponent } from './photography/photography.component';
import { DesignComponent } from './design/design.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

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
    WebDevelopmentComponent,
    PhotographyComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgVerticalTimelineModule,
    NgxMasonryModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
