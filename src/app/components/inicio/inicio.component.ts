import { Component } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  // MODO  OSCURO
  darkMode: boolean = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode');
  }

  // ANIMACION SVG CON GSAP
  // const svgElement = document.querySelector('division7');

  // const tl = gsap.timeline();
  // tl.from(svgElement, { x: -100, opacity: 0, duration: 1, ease: 'power1.out' });

  // tl.play();



}
