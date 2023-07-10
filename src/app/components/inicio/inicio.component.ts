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

  //CAMBIO DE TITULOS----------------------------------------
  private readonly divisiones = ['CONTROL DE PLAGAS', 'LIMPIEZA Y DESINFECCIÓN', 'PRADOS Y JARDINES', 'SANITIZACIÓN'];
  tituloActual: string = 'GESTIÓN DE SERVICIOS';
  activeImageIndex = 0;

  changeActiveImageIndex(index: number): void {
    this.activeImageIndex = index;
    this.tituloActual = this.divisiones[this.activeImageIndex];
    this.resumenDiv = this.resumenes[this.activeImageIndex];
    this.rotateIconContainer();
  }

  //darkmode-------------------------------------------------
  darkMode: boolean = false;
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode');
  }

  // RESUMENES -------------------------------------------------------------------
  public readonly resumenes = [
    'Texto para Control de Plagas',
    'Texto para Limpieza y Desinfección',
    'Texto para Jardinería',
    'Texto para Sanitización'
  ]

  resumenDiv: string = 'Texto de Ecovitali como Gestor de Servicios';

  // getResumenDiv(): string {
  //   return this.activeImageIndex !== -1 ? this.resumenes[this.activeImageIndex] : '';
  // }



  //RULETA---------------------------------------------------------------------
  private rotationAngle = 0;
  private readonly minAngle = 0;
  private readonly maxAngle = -135; // Invertir el valor del ángulo máximo para girar hacia la izquierda

  constructor(private renderer: Renderer2) { }

  rotateIconContainer() {
    const iconContainer = document.querySelector('.icon-container');
    this.renderer.setStyle(iconContainer, 'transform', `rotate(${this.rotationAngle}deg)`);
  }

  handleNextClick() {
    if (this.rotationAngle > this.maxAngle) {
      this.rotationAngle -= 45;
      this.changeActiveImageIndex((Math.abs(this.rotationAngle) / 45) % this.divisiones.length);
    }
  }

  handlePrevClick() {
    if (this.rotationAngle < this.minAngle) {
      this.rotationAngle += 45;
      this.changeActiveImageIndex((Math.abs(this.rotationAngle) / 45) % this.divisiones.length);
    }
  }
}


  // // REDIRECION AL COMPONENTE SERVICIO
  // redirectToContacto() {
  //   this.router.navigate(['/servicios']);
  // }


