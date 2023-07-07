import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';
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
    // ANIMACION DE CARRUSEL ----------------------------------------------------------------
    trigger('carouselAnimation', [
      state('active', style({ transform: 'rotate(0deg)' })),
      state('inactive', style({ transform: 'rotate(45deg)' })),
      transition('inactive => active', animate('500ms ease-in-out')),
      transition('active => inactive', animate('500ms ease-in-out'))
    ])
  ],
})

export class InicioComponent implements OnInit {

  titulos: string[] = ['CONTROL DE PLAGAS', 'LIMPIEZA Y DESINFECCIÓN', 'PRADOS Y JARDINES', 'SANITIZACIÓN' ];
  tituloActual: string = 'GESTIÓN DE SERVICIOS';
  activeImageIndex: number = 0;


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


