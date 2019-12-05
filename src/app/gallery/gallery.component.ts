import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NgxMasonryOptions } from 'ngx-masonry';

import { IImage } from './models/image.interface';
import { IConfiguration } from './models/configuration.interface';
import { GalleryMode } from './models/gallery-mode';
import { Scaling } from './models/scaling';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('appear', [
      transition(function(_, y) { return y !== 'void'; } , [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({opacity: 1}))
      ])
    ])
  ]
})
export class GalleryComponent {

  @Input()
  config: IConfiguration = {
    mode: GalleryMode.Default,
    interval: 5000,
    progressBarColor: 'rgb(168, 168, 168)',
    scaling: Scaling.Contain
  };

  @Input()
  set images(value: IImage[]) {
    this._images = value;
    this.currentImage =
      this._images && this._images.length
      ? this._images[0]
      : null;
  }

  _images: IImage[] = [];
  currentImage: IImage;
  previousImage: IImage;
  imageOpen = false;

  options: NgxMasonryOptions = {
    columnWidth: 500,
    itemSelector: '.thumbnail'
  };

  get currentIndex() {
    return this._images.indexOf(this.currentImage);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.currentImage = null;
      this.imageOpen = false;
    }
  }

  getUrl = (image: IImage) => `url('${image.url}')`;

  get progress() {
    const value = this._images.length
      ? `${((this.currentIndex + 1) / this._images.length) * 100}%`
      : `0%`;
    const previousValue = this._images.length
    ? `${((this._images.indexOf(this.previousImage) + 1) / this._images.length) * 100}%`
    : `0%`;
    return { value: value, params: {progress: value, previousProgress: previousValue}};
  }

  get imageMode() {
    return Scaling[this.config.scaling].toLocaleLowerCase();
  }

  next() {
    this.previousImage = this.currentImage;
    const index =
      this._images.indexOf(this.currentImage) === this._images.length - 1
        ? 0
        : this._images.indexOf(this.currentImage) + 1;
    this.currentImage = this._images[index];
  }

  previous() {
    this.previousImage = this.currentImage;
    const index =
      this._images.indexOf(this.currentImage) === 0
        ? this._images.length - 1
        : this._images.indexOf(this.currentImage) - 1;
    this.currentImage = this._images[index];
  }

  enlarge(image: IImage) {
    this.imageOpen = true;
    this.currentImage = image;
  }
}
