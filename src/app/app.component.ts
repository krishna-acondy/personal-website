import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { appear } from './shared/animations';
import { Observable, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ThemeService } from './shared/theme.service';

export interface MenuItem {
  name: string;
  link: string;
  color: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [appear]
})
export class AppComponent implements OnInit {
  @ViewChild('body', { static: true })
  body: ElementRef;

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
  isDarkMode$: Observable<boolean>;
  currentUrl: string;

  constructor(private router: Router, private themeService: ThemeService) {
    this.isDarkMode$ = themeService.darkMode;
  }
  scrollPosition$: Observable<number>;

  ngOnInit() {
    this.scrollPosition$ = fromEvent(document.body, 'scroll').pipe(
      map((scrollEvent: any) => scrollEvent.target.scrollTop)
    );
  }

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
    this.goToLink(item.link);
  }

  goToLink(link: string) {
    this.currentUrl = link;
    this.router.navigateByUrl(link);
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
