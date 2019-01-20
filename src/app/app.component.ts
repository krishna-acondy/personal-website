import { Component, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { appear } from './shared/animations';

export interface MenuItem {
  name: string;
  link: string;
  color: string;
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
      link: '/',
      color: '#ffffff'
    },
    {
      name: 'Web Development',
      link: 'web-development',
      color: '#129efc'
    },
    {
      name: 'Design',
      link: 'design',
      color: '#0699b3'
    },
    {
      name: 'Photography',
      link: 'photography',
      color: '#ffffff'
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

  navigateTo(item: MenuItem) {
    document.querySelector('body').classList.remove('open');
    document.querySelector('body').style.backgroundColor = item.color;
    document.querySelector('header').style.backgroundColor = item.color;
    this.router.navigateByUrl(item.link);
  }
}
