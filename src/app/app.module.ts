import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { PhotographyComponent } from './photography/photography.component';
import { DesignComponent } from './design/design.component';

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
    DesignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
