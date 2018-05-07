import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, group, stagger, query } from '@angular/animations';

import { GalleryMode } from './gallery/models/gallery-mode';
import { IConfiguration } from './gallery/models/configuration.interface';
import { Scaling } from './gallery/models/scaling';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      transition('void => *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        group([
          animate('1000ms ease-out', style({transform: 'translateX(0%)'})),
          animate('2000ms ease-out', style({opacity: 1}))
        ])
      ])
    ]),
    trigger('appear', [
      transition('* => *', [
        query('*', [
          style({ opacity: 0 }),
          stagger(2000, [
            animate('500ms ease-in-out', style({opacity: 1}))
          ])
        ], { optional: false })
      ])
    ])
  ]
})
export class AppComponent {
  constructor(private router: Router) { }

  @ViewChild('sidebar')
  sideBar: ElementRef;

  @ViewChild('menubar')
  menuBar: ElementRef;

  get mode() {
    return this.sideBar && this.sideBar.nativeElement.offsetParent ? 'sidebar' : 'menu-bar';
  }

  get isHome() {
    return this.router.url === '/';
  }
  // images = [
  //   { url: 'assets/images/1.jpg', caption: 'Morning Glory - 1' },
  //   { url: 'assets/images/2.jpg', caption: 'Morning Glory - 2' },
  //   { url: 'assets/images/3.jpg', caption: 'Morning Glory - 3' },
  //   { url: 'assets/images/4.jpg', caption: 'Morning Glory - 4' },
  //   { url: 'assets/images/5.jpg', caption: 'Incredibly long test caption that is longer than all others' },
  //   { url: 'assets/images/6.jpg', caption: 'Morning Glory - 6' },
  //   { url: 'assets/images/7.jpg', caption: 'Morning Glory - 7' },
  //   { url: 'assets/images/8.jpg', caption: 'Morning Glory - 8' },
  //   { url: 'assets/images/9.jpg', caption: 'Morning Glory - 9' },
  //   { url: 'assets/images/10.jpg', caption: 'Morning Glory - 10' }
  // ];

  // config: IConfiguration = {
  //   mode: GalleryMode.SlideShow,
  //   interval: 5000,
  //   progressBarColor: 'rgb(168, 168, 168)',
  //   scaling: Scaling.Contain
  // };
}
