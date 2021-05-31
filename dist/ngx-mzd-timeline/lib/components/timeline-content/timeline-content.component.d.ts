import { ElementRef, OnInit } from "@angular/core";
export declare class MzdTimelineContentComponent implements OnInit {
    private elementRef;
    card: boolean;
    border: boolean;
    leftSide: boolean;
    set left(value: boolean);
    set right(value: boolean);
    set noAlternate(value: boolean);
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
