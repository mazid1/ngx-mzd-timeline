import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[mzdTimelineItem]',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {

  @Input() border = true;

  constructor() { }

  ngOnInit(): void {
  }

}
