import { Injectable } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  getRouteAnimation() {
    return trigger('routeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]);
  }
}
