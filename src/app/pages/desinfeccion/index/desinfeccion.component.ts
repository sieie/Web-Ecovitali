import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-desinfeccion',
  templateUrl: './desinfeccion.component.html',
  styleUrls: ['./desinfeccion.component.css']
})
export class DesinfeccionComponent implements OnInit {

  constructor() { }

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
