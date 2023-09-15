import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit, AfterViewInit {
  @ViewChild('sectionId', { static: false }) sectionIdRef: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', () => AOS.refresh());
  }

  ngAfterViewInit() {
    this.scrollToSection();
  }

  scrollToSection() {
    if (this.sectionIdRef) {
      const sectionIdElement = this.sectionIdRef.nativeElement;
      sectionIdElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
