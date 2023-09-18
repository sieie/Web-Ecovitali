import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in-out', style({ opacity: 1.5 })),
      ]),
      transition(':leave', [
        animate('800ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class NosotrosComponent {}
