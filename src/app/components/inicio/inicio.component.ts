import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { gsap } from 'gsap';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    // ANIMACIONES PARA EL MENU -----------------------------------------------
    trigger('fadeinUp', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(0px)' }),
        animate('900ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})

export class InicioComponent {

}


  // // REDIRECION AL COMPONENTE SERVICIO
  // redirectToContacto() {
  //   this.router.navigate(['/servicios']);
  // }


