import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mzd-timeline';

  constructor(private themeService: ThemeService) { }

  setDarkMode(darkMode: boolean) {
    this.themeService.setDarkMode(darkMode);
  }
}
