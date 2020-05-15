import { Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mzd-timeline-content',
  templateUrl: './timeline-content.component.html',
  styleUrls: ['./timeline-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineContentComponent implements OnInit {

  @Input() border = true;

  set left(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, 'left');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'left');
    }
  }

  set right(value: boolean) {
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, 'right');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'right');
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }

}
