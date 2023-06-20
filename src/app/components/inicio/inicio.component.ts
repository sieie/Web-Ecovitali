import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit, AfterViewInit  {

  constructor(private router: Router ) { }

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

  ngOnInit(): void {
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

