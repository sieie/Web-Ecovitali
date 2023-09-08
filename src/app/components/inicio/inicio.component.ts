import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.animate', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.animate',
          start: 'top center',
          end: 'bottom center',
          markers: true,
        },
      });
    }
  }
  // // REDIRECION AL COMPONENTE SERVICIO
  // redirectToContacto() {
  //   this.router.navigate(['/servicios']);
  // }


