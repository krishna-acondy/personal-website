import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

export interface ITimelineItem {
  timePeriod: string;
  title: string;
  subtitle: string;
  text: string
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {

  @Input()
  set items(value) {
    this._items = value;
    this.oddItems = this.items.filter((v, i) => i % 2 !== 0);
    this.evenItems = this.items.filter((v, i) => i % 2 === 0);
  }

  get items() {
    return this._items;
  }

  oddItems: ITimelineItem[] = [];
  evenItems: ITimelineItem[] = [];

  private _items: ITimelineItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
