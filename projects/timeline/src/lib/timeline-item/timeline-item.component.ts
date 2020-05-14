import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: '[mzdTimelineItem]',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {

  @Input() border = true;
  @Input() index = 0;
  @HostBinding('class.mzd-timeline-container') container: boolean = true;
  @HostBinding('class.left') left: boolean = true;
  @HostBinding('class.right') right: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.left = (this.index % 2 === 0);
    this.right = !this.left;
  }

}
