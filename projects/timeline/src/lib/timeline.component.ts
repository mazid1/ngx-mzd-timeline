import { ThrowStmt } from '@angular/compiler';
import {
    AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChildren,
    ViewEncapsulation
} from '@angular/core';

import { TimelineContentComponent } from './timeline-content/timeline-content.component';

@Component({
  selector: 'mzd-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit, AfterViewInit {

  @ContentChildren(TimelineContentComponent) contents: QueryList<TimelineContentComponent>;

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
