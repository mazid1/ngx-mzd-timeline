import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent, TimelineItemComponent],
  imports: [
    BrowserModule
  ],
  exports: [TimelineComponent, TimelineItemComponent]
})
export class TimelineModule { }
