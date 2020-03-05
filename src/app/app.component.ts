import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';

import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterEvent
} from '@angular/router';
import { appear } from './shared/animations';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
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
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('body', { static: true })
  body: ElementRef;
  routerEventSubscription: Subscription;
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
    this.routerEventSubscription = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        if (e.url === '/') {
          this.themeService.startBackgroundAnimation();
        } else {
          this.themeService.stopBackgroundAnimation();
        }
      });
  }

  ngOnDestroy() {
    if (this.routerEventSubscription) {
      this.routerEventSubscription.unsubscribe();
    }
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
