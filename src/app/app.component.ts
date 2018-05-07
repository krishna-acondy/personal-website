import { Component, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { appear } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    appear
  ]
})
export class AppComponent {
  constructor(private router: Router) { }

  showContent = true;

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

  toggleContent(isMenuOpen: boolean) {
    this.showContent = !isMenuOpen;
  }
}
