import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkMode = false;
  private darkModeSubject = new BehaviorSubject(this._darkMode);

  toggleDarkMode() {
    this._darkMode = !this._darkMode;
    const bodyClassList = document.querySelector('body').classList;
    bodyClassList.contains('dark')
      ? bodyClassList.remove('dark')
      : bodyClassList.add('dark');
    this.darkModeSubject.next(this._darkMode);
  }

  lightenBody() {
    const bodyClassList = document.querySelector('body').classList;
    bodyClassList.add('white');
  }

  unlightenBody() {
    const bodyClassList = document.querySelector('body').classList;
    if (bodyClassList.contains('white')) {
      bodyClassList.remove('white');
    }
  }

  get darkMode() {
    return this.darkModeSubject.asObservable().pipe(shareReplay());
  }
}
