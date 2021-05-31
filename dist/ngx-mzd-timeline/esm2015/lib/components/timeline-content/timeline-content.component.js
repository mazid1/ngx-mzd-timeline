import { Component, ElementRef, Input, ViewEncapsulation, } from "@angular/core";
export class MzdTimelineContentComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbXpkLXRpbWVsaW5lL3NyYy9saWIvY29tcG9uZW50cy90aW1lbGluZS1jb250ZW50L3RpbWVsaW5lLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLDJCQUEyQjtJQWlCdEMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWhCakMsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGFBQVEsR0FBWSxJQUFJLENBQUM7SUFjVyxDQUFDO0lBWjlDLElBQUksSUFBSSxDQUFDLEtBQWM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELElBQUksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUlELFFBQVEsS0FBVSxDQUFDOzs7WUF6QnBCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtSUFBZ0Q7Z0JBRWhELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBWEMsVUFBVTs7O21CQWFULEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm16ZC10aW1lbGluZS1jb250ZW50XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGltZWxpbmUtY29udGVudC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdGltZWxpbmUtY29udGVudC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTXpkVGltZWxpbmVDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2FyZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGJvcmRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsZWZ0U2lkZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgc2V0IGxlZnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGVudC1sZWZ0XCIsIHZhbHVlKTtcbiAgfVxuXG4gIHNldCByaWdodCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb250ZW50LXJpZ2h0XCIsIHZhbHVlKTtcbiAgfVxuXG4gIHNldCBub0FsdGVybmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJuby1hbHRlcm5hdGVcIiwgdmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiJdfQ==