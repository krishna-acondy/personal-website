import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  isDarkMode$: Observable<boolean>;
  albums = ['japan', 'netherlands', 'paris', 'coorg', 'bylakuppe'];
  currentAlbum = 'japan';
  japan = [
    { url: 'assets/images/japan/1.jpeg', caption: 'Tokyo, Japan' },
    { url: 'assets/images/japan/2.jpeg', caption: 'Tokyo, Japan' },
    { url: 'assets/images/japan/3.jpeg', caption: 'Daizafu, Fukuoka, Japan' },
    { url: 'assets/images/japan/4.jpeg', caption: 'Tokyo, Japan' },
    { url: 'assets/images/japan/5.jpeg', caption: 'Yasaka-jinja Shrine⁩, ⁨Kyoto⁩, ⁨Japan⁩' },
    { url: 'assets/images/japan/6.jpeg', caption: 'Kyoto, Japan' },
    { url: 'assets/images/japan/7.jpeg', caption: 'Hiroshima, Japan' },
    { url: 'assets/images/japan/8.jpeg', caption: 'Fukuoka, Japan' },
    { url: 'assets/images/japan/9.jpeg', caption: 'Tokyo, Japan' },
    { url: 'assets/images/japan/10.jpeg', caption: 'Nara, Japan' },
    { url: 'assets/images/japan/11.jpeg', caption: 'Hiroshima, Japan' },
    { url: 'assets/images/japan/12.jpeg', caption: 'Nara, Japan' },
    { url: 'assets/images/japan/13.jpeg', caption: 'Fushimi Shrine, Kyoto, Japan' }
  ];

  netherlands = [
    { url: 'assets/images/netherlands/1.jpg', caption: 'Delft, The Netherlands' },
    { url: 'assets/images/netherlands/2.jpg', caption: 'Schipluiden, The Netherlands' },
    { url: 'assets/images/netherlands/3.jpg', caption: 'Delft, The Netherlands' },
    { url: 'assets/images/netherlands/4.jpg', caption: 'Nuenen, The Netherlands' },
    { url: 'assets/images/netherlands/5.jpg', caption: 'Lisse, The Netherlands' },
    { url: 'assets/images/netherlands/6.jpg', caption: 'Utrecht, The Netherlands' },
    { url: 'assets/images/netherlands/7.jpg', caption: 'Den Haag, The Netherlands' },
    { url: 'assets/images/netherlands/8.jpg', caption: 'Ameland, The Netherlands' },
    { url: 'assets/images/netherlands/9.jpg', caption: 'Utrecht, The Netherlands' },
    { url: 'assets/images/netherlands/10.jpg', caption: 'Eindhoven, The Netherlands' },
    { url: 'assets/images/netherlands/11.jpg', caption: 'Amsterdam, The Netherlands' }
  ];

  paris = [
    { url: 'assets/images/paris/1.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/2.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/3.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/4.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/5.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/6.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/7.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/8.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/9.jpg', caption: 'Paris, France' },
    { url: 'assets/images/paris/10.png', caption: 'Paris, France' },
    { url: 'assets/images/paris/11.png', caption: 'Paris, France' }
  ];

  coorg = [
    { url: 'assets/images/coorg/1.jpg', caption: 'Coorg, Karnataka, India' },
    { url: 'assets/images/coorg/2.jpg', caption: 'Coorg, Karnataka, India' },
    { url: 'assets/images/coorg/3.jpg', caption: 'Coorg, Karnataka, India' },
    { url: 'assets/images/coorg/4.jpg', caption: 'Coorg, Karnataka, India' }
  ];


  bylakuppe = [
    { url: 'assets/images/bylakuppe/1.jpg', caption: 'Bylakuppe, India' },
    { url: 'assets/images/bylakuppe/2.png', caption: 'Bylakuppe, India' },
    { url: 'assets/images/bylakuppe/3.png', caption: 'Bylakuppe, India' },
    { url: 'assets/images/bylakuppe/4.png', caption: 'Bylakuppe, India' },
    { url: 'assets/images/bylakuppe/5.png', caption: 'Bylakuppe, India' },
    { url: 'assets/images/bylakuppe/6.png', caption: 'Bylakuppe, India' },
    { url: 'assets/images/bylakuppe/7.png', caption: 'Bylakuppe, India' },
    { url: 'assets/images/bylakuppe/8.png', caption: 'Bylakuppe, India' }
  ];

  constructor(
    private themeService: ThemeService,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.isDarkMode$ = this.themeService.darkMode
    .pipe(
      tap((isDarkMode) => {
        if (isDarkMode) {
          this.elementRef.nativeElement.className += ' dark';
        } else {
          this.elementRef.nativeElement.className = this.elementRef.nativeElement.className.replace(/dark/g, '');
        }
      }));
  }
}
