import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITimelineItem } from '../timeline.component';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineCardComponent implements OnInit {

  @Input()
  item: ITimelineItem;

  @Input()
  connectorSide: 'left' | 'right' = 'left';

  constructor() { }

  ngOnInit() {
  }

}
