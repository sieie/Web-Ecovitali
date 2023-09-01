import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
]
})
export class HeaderComponent {
  isNavbarColored = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight / 2) {
      this.isNavbarColored = true;
    } else {
      this.isNavbarColored = false;
    }
  }
}
