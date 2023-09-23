import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-plagas',
  templateUrl: './plagas.component.html',
  styleUrls: ['./plagas.component.css']
})
export class PlagasComponent implements OnInit  {

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
