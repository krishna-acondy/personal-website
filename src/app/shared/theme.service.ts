import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkMode = true;
  private darkModeSubject = new BehaviorSubject(this._darkMode);

  toggleDarkMode() {
    this._darkMode = !this._darkMode;
    const bodyClassList = document.querySelector('body').classList;
    bodyClassList.contains('dark')
      ? bodyClassList.remove('dark')
      : bodyClassList.add('dark');
    this.darkModeSubject.next(this._darkMode);
  }

  stopBackgroundAnimation() {
    const bodyClassList = document.querySelector('body').classList;
    if (!bodyClassList.contains('no-animation')) {
      bodyClassList.add('no-animation');
    }
  }

  startBackgroundAnimation() {
    const bodyClassList = document.querySelector('body').classList;
    if (bodyClassList.contains('no-animation')) {
      bodyClassList.remove('no-animation');
    }
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
