import { Component, ContentChildren, Input, ViewEncapsulation, } from "@angular/core";
import { MzdTimelineContentComponent } from "../timeline-content/timeline-content.component";
export class MzdTimelineComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW16ZC10aW1lbGluZS9zcmMvbGliL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFLTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFRN0YsTUFBTSxPQUFPLG9CQUFvQjtJQU8vQjtRQU5TLHFCQUFnQixHQUFxQixNQUFNLENBQUM7UUFDNUMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUl0QixDQUFDO0lBRWhCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVEsS0FBVSxDQUFDO0lBRW5CLGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDaEMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUNoQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLE1BQU0sRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7d0JBQ3ZDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQy9CLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO3dCQUN2QyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMvQixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsQ0FBQztpQkFDSjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLE1BQU0sQ0FBQztvQkFDaEQsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssT0FBTyxDQUFDO2dCQUNwRCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ25CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQ3pELENBQUM7U0FDSDtJQUNILENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG1PQUF3QztnQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OytCQUVFLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLGVBQWUsU0FBQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXpkVGltZWxpbmVDb250ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4uL3RpbWVsaW5lLWNvbnRlbnQvdGltZWxpbmUtY29udGVudC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm16ZC10aW1lbGluZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90aW1lbGluZS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTXpkVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGZpcnN0Q29udGVudFNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiID0gXCJsZWZ0XCI7XG4gIEBJbnB1dCgpIGFsdGVybmF0ZVNpZGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBtYW51YWxTaWRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oTXpkVGltZWxpbmVDb250ZW50Q29tcG9uZW50KVxuICBjb250ZW50czogUXVlcnlMaXN0PE16ZFRpbWVsaW5lQ29udGVudENvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDb250ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbnRlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udGVudHMpIHtcbiAgICAgIGlmICh0aGlzLm1hbnVhbFNpZGUpIHtcbiAgICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgY29udGVudC5sZWZ0ID0gY29udGVudC5sZWZ0U2lkZTtcbiAgICAgICAgICBjb250ZW50LnJpZ2h0ID0gIWNvbnRlbnQubGVmdFNpZGU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFsdGVybmF0ZVNpZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDb250ZW50U2lkZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb250ZW50LmxlZnQgPSBpbmRleCAlIDIgPT09IDA7XG4gICAgICAgICAgICBjb250ZW50LnJpZ2h0ID0gaW5kZXggJSAyICE9PSAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQubGVmdCA9IGluZGV4ICUgMiAhPT0gMDtcbiAgICAgICAgICAgIGNvbnRlbnQucmlnaHQgPSBpbmRleCAlIDIgPT09IDA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgICAgIGNvbnRlbnQubGVmdCA9IHRoaXMuZmlyc3RDb250ZW50U2lkZSA9PT0gXCJsZWZ0XCI7XG4gICAgICAgICAgY29udGVudC5yaWdodCA9IHRoaXMuZmlyc3RDb250ZW50U2lkZSA9PT0gXCJyaWdodFwiO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaChcbiAgICAgICAgKGNvbnRlbnQpID0+IChjb250ZW50Lm5vQWx0ZXJuYXRlID0gIXRoaXMuYWx0ZXJuYXRlU2lkZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=