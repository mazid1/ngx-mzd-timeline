import { AfterViewInit, OnChanges, OnInit, QueryList, SimpleChanges } from "@angular/core";
import { MzdTimelineContentComponent } from "../timeline-content/timeline-content.component";
export declare class MzdTimelineComponent implements OnInit, AfterViewInit, OnChanges {
    firstContentSide: "left" | "right";
    alternateSide: boolean;
    manualSide: boolean;
    contents: QueryList<MzdTimelineContentComponent>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private updateContent;
}
