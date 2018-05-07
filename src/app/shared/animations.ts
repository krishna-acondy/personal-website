import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

export const appear = trigger('appear', [
  transition('* => *', [
    query('*', [
      style({ opacity: 0 }),
      stagger(2000, [
        animate('500ms ease-in-out', style({opacity: 1}))
      ])
    ], { optional: false })
  ])
]);
