import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router, NavigationEnd } from '@angular/router';

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

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Cuando se complete la navegación, desplaza la página hacia arriba
        window.scrollTo(0, 0);
      }
    });
  }
}
