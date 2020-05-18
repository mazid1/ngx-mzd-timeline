import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MzdIconComponent } from './components/icon/icon.component';
import {
  MzdTimelineContentComponent
} from './components/timeline-content/timeline-content.component';
import { MzdTimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [MzdTimelineComponent, MzdTimelineContentComponent, MzdIconComponent],
  imports: [
    BrowserModule
  ],
  exports: [MzdTimelineComponent, MzdTimelineContentComponent, MzdIconComponent]
})
export class MzdTimelineModule { }
