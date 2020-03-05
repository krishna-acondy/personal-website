import { Component } from '@angular/core';
import { ThemeService } from '../shared/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {
  isDarkMode$: Observable<boolean>;
  constructor(private themeService: ThemeService) {
    this.isDarkMode$ = this.themeService.darkMode;
  }
}
