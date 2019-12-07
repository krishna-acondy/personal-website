import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, HostListener } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

import { IImage } from './models/image.interface';
import { DomSanitizer } from '@angular/platform-browser';

export function shouldAnimate(previousValue, nextValue) {
  return previousValue !== 'void'
    && nextValue !== 'void';
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('appear', [
      transition('void => *' , [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(shouldAnimate , [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition('* => void' , [
        style({ opacity: 1 }),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class GalleryComponent {

  constructor(private domSanitizer: DomSanitizer) { }

  @Input()
  images: IImage[] = [];

  currentImage: IImage;
  currentScale = 1;
  currentDeltaX = 0;
  currentDeltaY = 0;

  options: NgxMasonryOptions = {
    columnWidth: '.thumbnail',
    itemSelector: '.thumbnail'
  };

  get currentIndex() {
    return this.images.indexOf(this.currentImage);
  }

  get currentTransform() {
    return this.domSanitizer.bypassSecurityTrustStyle(
      `translateX(${this.currentDeltaX}px) `
      + `translateY(${this.currentDeltaY}px) `
      + `scale(${this.currentScale})`);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (this.currentImage) {
      if (event.key === 'Escape') {
        this.currentImage = null;
      } else if (event.key === 'ArrowLeft') {
        this.currentImage = this.images[this.currentIndex - 1] || this.images[this.images.length - 1];
      } else if (event.key === 'ArrowRight') {
        this.currentImage = this.images[this.currentIndex + 1] || this.images[0];
      }
    }
  }

  getUrl = (image: IImage) => image ? `url('${image.url}')` : '';

  enlarge(image: IImage) {
    this.currentImage = image;
  }

  onClose() {
    this.currentImage = null;
    this.reset();
  }

  onPan(event) {
    if (this.currentScale !== 1) {
      this.currentDeltaX = event.deltaX;
      this.currentDeltaY = event.deltaY;
    }
  }

  onPinch(event) {
    this.reset();
    this.currentScale = event.scale;
  }

  onSwipeLeft() {
    this.currentImage = this.images[this.currentIndex + 1] || this.images[0];
    this.reset();
  }

  onSwipeRight() {
    this.currentImage = this.images[this.currentIndex - 1] || this.images[this.images.length - 1];
    this.reset();
  }

  private reset() {
    this.currentScale = 1;
    this.currentDeltaX = 0;
    this.currentDeltaY = 0;
  }
}
