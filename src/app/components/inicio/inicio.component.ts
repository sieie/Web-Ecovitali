import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit  {

  getState(outlet: RouterOutlet): string {
    return outlet.activatedRouteData['animation'];
  }

  verMas: boolean = false;

  constructor() {}

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', () => AOS.refresh());
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
