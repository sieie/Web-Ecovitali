import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Ecovitali';


  ngAfterViewInit() {
    gsap.from('.section', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.3
    });
  }
}
