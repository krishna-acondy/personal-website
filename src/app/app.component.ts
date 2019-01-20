import { Component, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { appear } from './shared/animations';

export interface MenuItem {
  name: string;
  link: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    appear
  ]
})
export class AppComponent {
  isMenuOpen = false;

  menuItems: MenuItem[] = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Web Development',
      link: 'web-development'
    },
    {
      name: 'Design',
      link: 'design'
    },
    {
      name: 'Photography',
      link: 'photography'
    }
  ];
  constructor(private router: Router) { }

  get isHome() {
    return this.router.url === '/';
  }

  onClick() {
    this.isMenuOpen = !this.isMenuOpen;
    const classList = document.querySelector('body').classList;
    classList.contains('open')
      ? classList.remove('open')
      : classList.add('open');
  }

  navigateTo(link: string) {
    document.querySelector('body').classList.remove('open');
    this.router.navigateByUrl(link);
  }
}
