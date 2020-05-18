import { MzdTimelineModule } from 'projects/mzd-timeline/src/public-api';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell as faRegularBell, faSmileBeam, faSmileWink
} from '@fortawesome/free-regular-svg-icons';
import {
  faAsterisk, faBan, faBell as faSolidBell, faCamera, faCircle, faCloud, faCog, faEnvelopeOpen,
  faHandPointLeft, faMobile, faMoon, faPlay, faSkating, faSkiing, faSkiingNordic,
  faSmileBeam as faSmileBeanSolid, faSmileWink as faSmileWinkSolid, faSnowboarding, faSpinner,
  faSquare, faStar, faSun, faSwimmer, faSync
} from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MzdTimelineModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSmileWinkSolid, faSmileBeanSolid,
      faSmileWink, faSmileBeam, faEnvelopeOpen, faCloud,
      faMobile, faSquare, faSpinner, faCircle,
      faSync, faPlay, faSun, faMoon, faStar,
      faHandPointLeft, faAsterisk, faCog, faSkating,
      faSkiing, faSkiingNordic, faSnowboarding, faSwimmer,
      faSolidBell, faRegularBell, faCamera, faBan);
  }
}
