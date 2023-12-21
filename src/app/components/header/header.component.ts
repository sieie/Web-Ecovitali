import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarColored = false;
  isTextColored = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const scrollPosition =
          window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const windowHeight = window.innerHeight;

      if (scrollPosition >= windowHeight * 0.2) {
          this.isNavbarColored = true;
          this.isTextColored = true;
      } else {
          this.isNavbarColored = false;
          this.isTextColored = false;
      }
  }
}
