import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

export class TimelineEvent {
  id: number;
  title: string;
  content: string;
  date: string;
  icon: string;
  show?: boolean;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('slide', [
      transition('false => true', [
        style({ opacity: 0, height: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1, height: '100%' }))
      ]),
      transition('true => false', [
        style({ opacity: 1, height: '100%' }),
        animate('400ms ease-in-out', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class TimelineComponent {
  @Input()
  set data(events: TimelineEvent[]) {
    this._data = events.map(e => {
      e.show = false;
      return e;
    });
  }

  @Input()
  isDarkMode = false;

  @Input()
  primaryColor: string;

  get data() {
    return this._data;
  }

  private _data: TimelineEvent[] = [];

  isPair(id: number): boolean {
    return !(id % 2);
  }

  toggle(item: TimelineEvent) {
    this._data.forEach(e => {
      if (e.id === item.id) {
        e.show = !e.show;
      } else {
        e.show = false;
      }
    });
  }
}
