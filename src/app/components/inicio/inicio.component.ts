import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements AfterViewInit {

  constructor(private router: Router) { }
//   // MODO  OSCURO
//   toggleDarkMode() : void {
//     document.body.classList.toggle('darkMode');
//  }

  darkMode: boolean = false;
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode');
  }

  // REDIRECION AL COMPONENTE SERVICIO
  redirectToServicios() {
    this.router.navigate(['/servicios']);
  }

  //ANIMACIÓN ENTRE COMPONENTES CON GSAP
  ngAfterViewInit() {
    gsap.from('.section', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.3
    });
  }
}
