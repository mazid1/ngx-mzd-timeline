import { MzdTimelineModule } from 'projects/mzd-timeline/src/public-api';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell as faRegularBell, faSmileBeam, faSmileWink
} from '@fortawesome/free-regular-svg-icons';
import {
  faAsterisk, faBan, faBell as faSolidBell, faBriefcase, faCamera, faCircle, faCloud, faCog,
  faEnvelopeOpen, faHandPointLeft, faMobile, faMoon, faPlay, faSkating, faSkiing, faSkiingNordic,
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
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    MzdTimelineModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatCommonModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule
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
      faSolidBell, faRegularBell, faCamera, faBan, faBriefcase);
  }
}
