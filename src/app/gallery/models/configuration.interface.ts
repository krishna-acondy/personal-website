import { GalleryMode } from './gallery-mode';
import { Scaling } from './scaling';

export interface IConfiguration {
  mode: GalleryMode;
  interval: number;
  progressBarColor: string;
  scaling: Scaling;
}
