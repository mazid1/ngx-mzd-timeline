import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private body: HTMLElement;
  private darkMode: boolean = false;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.body = document.body;
  }

  setDarkMode(mode: boolean) {
    if (this.darkMode === mode) {
      return;
    }
    this.darkMode = mode;
    if (this.darkMode) {
      this.body.classList.add('dark-theme');
    } else {
      this.body.classList.remove('dark-theme');
    }
  }
}
