import { Component, ViewEncapsulation, ElementRef, Input, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class MzdIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
MzdIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'mzd-icon',
                template: "<ng-content></ng-content>\n",
                styles: [""]
            },] }
];
MzdIconComponent.ctorParameters = () => [];

class MzdTimelineContentComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.card = true;
        this.border = false;
        this.leftSide = true;
    }
    set left(value) {
        this.elementRef.nativeElement.classList.toggle("content-left", value);
    }
    set right(value) {
        this.elementRef.nativeElement.classList.toggle("content-right", value);
    }
    set noAlternate(value) {
        this.elementRef.nativeElement.classList.toggle("no-alternate", value);
    }
    ngOnInit() { }
}
MzdTimelineContentComponent.decorators = [
    { type: Component, args: [{
                selector: "mzd-timeline-content",
                template: "<div [ngClass]=\"{ 'mzd-timeline-card': card, 'mzd-timeline-border': border }\">\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["mzd-timeline-content{display:block;padding:10px 30px;position:relative;background-color:inherit;width:50%}mzd-timeline-content .mzd-timeline-card{padding:16px;border-radius:4px;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}mzd-timeline-content .mzd-timeline-card mat-card{box-shadow:none!important;padding:0}mzd-timeline-content .mzd-timeline-border{border:1px solid grey;border-radius:4px}mzd-timeline-content.no-alternate{width:100%}mzd-timeline-content.no-alternate.content-right{left:0;right:auto;padding-left:60px}mzd-timeline-content.no-alternate.content-right:after{left:15px;right:auto}mzd-timeline-content.no-alternate.content-right mzd-icon{left:23px;right:auto}mzd-timeline-content.no-alternate.content-right:before{left:30px;right:auto;border-width:5px 10px 5px 20px;border-color:transparent grey transparent transparent}mzd-timeline-content.no-alternate.content-left{left:auto;right:0;padding-right:60px}mzd-timeline-content.no-alternate.content-left:after{left:auto;right:15px}mzd-timeline-content.no-alternate.content-left mzd-icon{left:auto;right:23px}mzd-timeline-content.no-alternate.content-left:before{left:auto;right:30px;border:solid transparent;border-left:solid grey;border-width:5px 20px 5px 10px}mzd-timeline-content:after{content:\"\";position:absolute;width:30px;height:30px;left:auto;right:-15px;background:#f5f5f5;border:2px solid orange;top:15px;border-radius:50%;z-index:1;box-sizing:border-box}mzd-timeline-content mzd-icon{position:absolute;left:auto;right:-7px;top:21px;border-radius:50%;z-index:2;box-sizing:border-box;text-align:center;width:14px}mzd-timeline-content.content-left{left:0;right:auto}mzd-timeline-content.content-left:before{content:\"\";position:absolute;height:0;width:0;border:solid transparent;border-left:solid grey;border-width:5px 20px 5px 10px;top:25px;left:auto;right:0;z-index:1}mzd-timeline-content.content-right{left:auto;right:-50%}mzd-timeline-content.content-right:after{left:-15px;right:auto}mzd-timeline-content.content-right mzd-icon{left:-7px;right:auto}mzd-timeline-content.content-right:before{content:\"\";position:absolute;height:0;width:0;border:solid transparent;border-right:solid grey;border-width:5px 10px 5px 20px;top:25px;left:0;right:auto;z-index:1}@media screen and (max-width:599px){mzd-timeline-content{width:100%;padding-left:60px}mzd-timeline-content.no-alternate{padding-left:30Px}mzd-timeline-content.content-left:after,mzd-timeline-content.content-right:after{left:15px;right:auto}mzd-timeline-content.content-left{left:0;right:auto}mzd-timeline-content.content-left mzd-icon{left:23px;right:auto}mzd-timeline-content.content-left:before,mzd-timeline-content.content-right:before{left:30px;right:auto;border-width:5px 10px 5px 20px;border-color:transparent grey transparent transparent}mzd-timeline-content.content-right{left:0;right:auto}mzd-timeline-content.content-right mzd-icon{left:23px;right:auto}}"]
            },] }
];
MzdTimelineContentComponent.ctorParameters = () => [
    { type: ElementRef }
];
MzdTimelineContentComponent.propDecorators = {
    card: [{ type: Input }],
    border: [{ type: Input }],
    leftSide: [{ type: Input }]
};

class MzdTimelineComponent {
    constructor() {
        this.firstContentSide = "left";
        this.alternateSide = true;
        this.manualSide = false;
    }
    ngOnChanges(changes) {
        this.updateContent();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.updateContent();
    }
    updateContent() {
        if (this.contents) {
            if (this.manualSide) {
                this.contents.forEach((content) => {
                    content.left = content.leftSide;
                    content.right = !content.leftSide;
                });
            }
            else if (this.alternateSide) {
                if (this.firstContentSide === "left") {
                    this.contents.forEach((content, index) => {
                        content.left = index % 2 === 0;
                        content.right = index % 2 !== 0;
                    });
                }
                else {
                    this.contents.forEach((content, index) => {
                        content.left = index % 2 !== 0;
                        content.right = index % 2 === 0;
                    });
                }
            }
            else {
                this.contents.forEach((content) => {
                    content.left = this.firstContentSide === "left";
                    content.right = this.firstContentSide === "right";
                });
            }
            this.contents.forEach((content) => (content.noAlternate = !this.alternateSide));
        }
    }
}
MzdTimelineComponent.decorators = [
    { type: Component, args: [{
                selector: "mzd-timeline",
                template: "<div\n  class=\"mzd-timeline-line\"\n  [ngClass]=\"{\n    'no-alternate': !alternateSide,\n    left: firstContentSide !== 'left',\n    right: firstContentSide !== 'right'\n  }\"\n></div>\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["*{box-sizing:border-box}mzd-timeline{position:relative;display:block;width:100%;padding:50px 0}mzd-timeline .mzd-timeline-line{position:absolute;top:0;left:50%;right:auto;height:100%;width:1px;background:grey}mzd-timeline .mzd-timeline-line.no-alternate.left{left:30px;right:auto}mzd-timeline .mzd-timeline-line.no-alternate.right{left:auto;right:30px}@media screen and (max-width:599px){mzd-timeline .mzd-timeline-line{left:30px;right:auto}}"]
            },] }
];
MzdTimelineComponent.ctorParameters = () => [];
MzdTimelineComponent.propDecorators = {
    firstContentSide: [{ type: Input }],
    alternateSide: [{ type: Input }],
    manualSide: [{ type: Input }],
    contents: [{ type: ContentChildren, args: [MzdTimelineContentComponent,] }]
};

class MzdTimelineModule {
}
MzdTimelineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MzdTimelineComponent, MzdTimelineContentComponent, MzdIconComponent],
                imports: [
                    CommonModule
                ],
                exports: [MzdTimelineComponent, MzdTimelineContentComponent, MzdIconComponent]
            },] }
];

/*
 * Public API Surface of timeline
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MzdIconComponent, MzdTimelineComponent, MzdTimelineContentComponent, MzdTimelineModule };
//# sourceMappingURL=ngx-mzd-timeline.js.map
