import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
]
})
export class HeaderComponent {

    darkMode = false;

    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      const body = document.body;
      body.classList.toggle('dark-mode', this.darkMode);
    }


}
