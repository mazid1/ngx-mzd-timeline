import {
    AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewEncapsulation
} from '@angular/core';

import { MzdTimelineContentComponent } from '../timeline-content/timeline-content.component';

@Component({
  selector: 'mzd-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MzdTimelineComponent implements OnInit, AfterViewInit {

  @ContentChildren(MzdTimelineContentComponent) contents: QueryList<MzdTimelineContentComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateContent();
  }

  private updateContent() {
    if (this.contents) {
      this.contents.forEach((content, index) => {
        content.left = (index % 2 === 0);
        content.right = (index % 2 !== 0);
      });
    }
  }

}
