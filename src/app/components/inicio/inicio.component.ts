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
    trigger('rotateIcon', [
      transition(':increment', [
        style({ transform: 'rotate({{prevAngle}}deg)' }),
        animate('900ms ease', style({ transform: 'rotate({{currentAngle}}deg)' })),
      ], { params: { prevAngle: 0, currentAngle: -45 } }),
      transition(':decrement', [
        style({ transform: 'rotate({{prevAngle}}deg)' }),
        animate('900ms ease', style({ transform: 'rotate({{currentAngle}}deg)' })),
      ], { params: { prevAngle: 0, currentAngle: 45 } }),
    ]),
  ],
})

export class InicioComponent implements OnInit {

  titulos: string[] = ['CONTROL DE PLAGAS', 'LIMPIEZA Y DESINFECCIÓN', 'PRADOS Y JARDINES', 'SANITIZACIÓN' ];
  tituloActual: string = 'GESTIÓN DE SERVICIOS';
  activeImageIndex: number = 0;

  currentRotationAngle = 0;


  constructor() {}

  ngOnInit(): void {
    this.tituloActual = 'GESTIÓN DE SERVICIOS';
  }

  changeActiveImageIndex(index: number): void {
    this.activeImageIndex = index;
    this.tituloActual = this.titulos[this.activeImageIndex];

    if (index === this.activeImageIndex) {
      this.currentRotationAngle = (index + 1) * 45; // Rotación hacia la derecha
    } else if (index < this.activeImageIndex) {
      this.currentRotationAngle = (index - this.activeImageIndex) * -45; // Rotación hacia la izquierda
    }
  }


  cambiarTitulo(titulo: string): void {
    this.tituloActual = titulo;
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


