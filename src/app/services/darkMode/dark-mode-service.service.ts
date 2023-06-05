import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkMode: boolean = false;

  isDarkMode(): boolean {
    return this.darkMode;
  }

  setDarkMode(value: boolean): void {
    this.darkMode = value;
    document.body.classList.toggle('dark-mode', value);
  }
}
