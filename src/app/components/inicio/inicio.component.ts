import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('reduceImage', [
      state('initial', style({})),
      state('final', style({})),
      transition('initial => final', [
        animate('5s')
      ])
    ])
  ]
})
export class InicioComponent implements OnInit, AfterViewInit  {
  estadoAnimacion: string;

  constructor(private router: Router ) {
    this.estadoAnimacion = 'final';
  }

  darkMode: boolean = false;
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode');
  }
  @ViewChild('carouselElement', { static: false }) carouselElement!: ElementRef;
  carouselItems = [
    { src: './assets/img/website/Logo-Ecovitali-Gris.webp', alt: 'Imagen 1' },
    { src: './assets/img/website/Logo-Ecovitali-Gris.webp', alt: 'Imagen 2' },
    { src: './assets/img/website/Logo-Ecovitali-Gris.webp', alt: 'Imagen 3' }
  ];
  currentIndex = 0;

  ngOnInit() {
    setTimeout(() => {
      this.estadoAnimacion = 'initial';
      setTimeout(() => {
        this.estadoAnimacion = 'final';
      }, 2000);
    });
  }

  ngAfterViewInit() {
    this.startAnimation();
  }

  startAnimation() {
    const carouselItems = this.carouselElement.nativeElement.querySelectorAll('.carousel-item');

    carouselItems[this.currentIndex].addEventListener('animationend', () => {
      carouselItems[this.currentIndex].classList.remove('active');
      this.currentIndex = (this.currentIndex + 1) % carouselItems.length;
      carouselItems[this.currentIndex].classList.add('active');
    });
  }
}



  // // REDIRECION AL COMPONENTE SERVICIO
  // redirectToContacto() {
  //   this.router.navigate(['/servicios']);
  // }

