import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility() {
    return trigger('visibility', [
        state('shown', style({
          transform: 'scale(1.0)',
          opacity: 1
        })),
        state('hidden', style({
          transform: 'scale(0.5)',
          opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
      ])
}