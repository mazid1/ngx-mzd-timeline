import { Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mzd-timeline-content',
  templateUrl: './timeline-content.component.html',
  styleUrls: ['./timeline-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MzdTimelineContentComponent implements OnInit {

  @Input() card = true;
  @Input() border = false;

  set left(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, 'content-left');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'content-left');
    }
  }

  set right(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, 'content-right');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'content-right');
    }
  }

  set noAlternate(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, 'no-alternate');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'no-alternate');
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }

}
