import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements AfterViewInit {
  constructor(private router: Router) { }


  // redirectToInicio(): void {
  //   this.darkModeService.setDarkMode(false); // Restablece el modo oscuro al cambiar a la página de inicio
  //   this.router.navigate(['/inicio']);
  // }


  //ANIMACION ENTRE COMPONENTES CON GSAP
  ngAfterViewInit() {
    gsap.from('.section', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.3
    });
  }
  //REDIRECTION A INICIO
  redirectToInicio() {
    this.router.navigate(['/inicio']);
  }

}
