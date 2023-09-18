import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  title = 'Ecovitali';

  ngOnInit() {
    AOS.init({
      duration: 1300
    });

    // Configura GSAP para animaciones de transición entre rutas
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        gsap.fromTo('.navbar', { opacity: 0 }, { opacity: 1, duration: 0.5 });
      });
  }
}
