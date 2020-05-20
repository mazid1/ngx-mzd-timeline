import {
  AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewEncapsulation
} from '@angular/core';
import { MzdTimelineContentComponent } from '../timeline-content/timeline-content.component';

@Component({
  selector: 'mzd-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MzdTimelineComponent implements OnInit, AfterViewInit {

  @Input() firstContentSide: 'left' | 'right' = 'left';
  @Input() alternateSide: boolean = true;
  @ContentChildren(MzdTimelineContentComponent) contents: QueryList<MzdTimelineContentComponent>;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.updateContent();
  }

  private updateContent() {
    if (this.contents) {
      if (this.alternateSide) {
        if (this.firstContentSide === 'left') {
          this.contents.forEach((content, index) => {
            content.left = (index % 2 === 0);
            content.right = (index % 2 !== 0);
          });
        } else {
          this.contents.forEach((content, index) => {
            content.left = (index % 2 !== 0);
            content.right = (index % 2 === 0);
          });
        }
      } else {
        this.contents.forEach(content => {
          content.left = this.firstContentSide === 'left';
          content.right = this.firstContentSide === 'right';
        });
      }
      this.contents.forEach(content => content.noAlternate = !this.alternateSide);
    }
  }

}
