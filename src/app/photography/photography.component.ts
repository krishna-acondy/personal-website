import { Component, OnInit } from '@angular/core';

import { GalleryMode } from '../gallery/models/gallery-mode';
import { IConfiguration } from '../gallery/models/configuration.interface';
import { Scaling } from '../gallery/models/scaling';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  images = [
    { url: 'assets/images/1.jpg', caption: 'Coorg, Karnataka, India' },
    { url: 'assets/images/2.jpg', caption: 'Delft, The Netherlands' },
    { url: 'assets/images/3.jpg', caption: 'Bylakuppe, India' },
    { url: 'assets/images/4.jpg', caption: 'Coorg, Karnataka, India' },
    { url: 'assets/images/5.jpg', caption: 'Lisse, The Netherlands' },
    { url: 'assets/images/6.jpg', caption: 'Nuenen, The Netherlands' },
    { url: 'assets/images/7.jpg', caption: 'Paris, France' },
    { url: 'assets/images/8.jpg', caption: 'Coorg, Karnataka, India' },
    { url: 'assets/images/9.jpg', caption: 'Prague, Czech Republic' },
    { url: 'assets/images/10.jpg', caption: 'Ameland, The Netherlands' }
  ];

  config: IConfiguration = {
    mode: GalleryMode.Default,
    interval: 5000,
    progressBarColor: '#0699b3',
    scaling: Scaling.Cover
  };
  constructor() { }

  ngOnInit() {
  }

}
