import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';


interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('fadeinUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0px)' }),
        animate('1200ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class InicioComponent implements OnInit {

  //RULETA - ELLIPSE
  images: Image[] = [
    { src: 'SVG-Icono-Division-07.svg', alt: 'Control de Plagas' },
    { src: 'SVG-Icono-Division-08.svg', alt: 'Limpieza y Desinfección' },
    { src: 'SVG-Icono-Division-09.svg', alt: 'Prados y Jardines' },
    { src: 'SVG-Icono-Division-10.svg', alt: 'Sanitización' }
  ];

  activeImageIndex = 0;
  titulos = ['GESTION DE SERVICIOS', 'CONTROL DE PLAGAS', 'LIMPIEZA Y DESINFECCIÓN', 'SANITIZACIÓN', 'PRADOS Y JARDINES']
  tituloActual = 'GESTION DE SERVICIOS';

  changeActiveImageIndex(index: number) {
    this.activeImageIndex = index;
    this.tituloActual = this.titulos[this.activeImageIndex];
  }

  getImagePath(image: Image): string {
    return `assets/img/website${image.src}`;
  }


  // CAMBIO DE TITULO CON EL BOTON DE LA DIVISION
  ngOnInit() {
    this.tituloActual = 'GESTION DE SERVICIOS';
  }

  cambiarTitulo(titulo: string) {
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

