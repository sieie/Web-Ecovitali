import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-black',
  templateUrl: './header-black.component.html',
  styleUrls: ['./header-black.component.css']
})
export class HeaderBlackComponent {

  isNavbarColored = false;
  isTextColored = false; // Agregamos esta variable

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight * 0.2) {
      this.isNavbarColored = true;
      this.isTextColored = true; // Cambiamos la variable cuando hacemos scroll
    } else {
      this.isNavbarColored = false;
      this.isTextColored = false; // Cambiamos la variable cuando hacemos scroll hacia arriba
    }
  }
}
