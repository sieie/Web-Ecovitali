import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';

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
    // ANIMACION DE CARRUSEL ----------------------------------------------------------------
    trigger('carouselRotation', [
      state('active', style({ transform: 'rotate({{angle}}deg)' }), { params: { angle: 45 } }),
      transition('* => active', animate('500ms ease-in-out'))
    ])
  ],
})
export class InicioComponent implements OnInit {

  titulos: string[] = ['CONTROL DE PLAGAS', 'LIMPIEZA Y DESINFECCIÓN', 'PRADOS Y JARDINES', 'SANITIZACIÓN' ];
  tituloActual: string = 'GESTION DE SERVICIOS';
  activeImageIndex: number = 0;
  isAnyElementActive: boolean = false;


  constructor() {}

  ngOnInit(): void {
    this.tituloActual = 'GESTIÓN DE SERVICIOS';
  }

  changeActiveImageIndex(index: number): void {
    this.activeImageIndex = index;
    this.tituloActual = this.titulos[this.activeImageIndex];
  }

  cambiarTitulo(titulo: string): void {
    this.tituloActual = titulo;
  }


detectActiveClass() {
  const elements = document.querySelectorAll('.element-class.active');
  this.isAnyElementActive = elements.length > 0;
}

  darkMode: boolean = false;
  toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode');
    }


}




  // // REDIRECION AL COMPONENTE SERVICIO
  // redirectToContacto() {
  //   this.router.navigate(['/servicios']);
  // }


