import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-jardineria',
  templateUrl: './jardineria.component.html',
  styleUrls: ['./jardineria.component.css']
})
export class JardineriaComponent implements OnInit {

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
