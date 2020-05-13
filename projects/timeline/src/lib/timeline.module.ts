import { NgModule } from '@angular/core';

import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent, TimelineItemComponent],
  imports: [
  ],
  exports: [TimelineComponent, TimelineItemComponent]
})
export class TimelineModule { }
