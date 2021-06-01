import { Component } from "@angular/core";
import { ThemeService } from "./theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mzd-timeline";

  alternateSide: boolean = true;
  firstContentSide: "left" | "right" = "left";
  manualSide: boolean = true;

  constructor(private themeService: ThemeService) {}

  setDarkMode(darkMode: boolean) {
    this.themeService.setDarkMode(darkMode);
  }
}
