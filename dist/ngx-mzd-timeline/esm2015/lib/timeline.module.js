import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzdIconComponent } from './components/icon/icon.component';
import { MzdTimelineContentComponent } from './components/timeline-content/timeline-content.component';
import { MzdTimelineComponent } from './components/timeline/timeline.component';
export class MzdTimelineModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW16ZC10aW1lbGluZS9zcmMvbGliL3RpbWVsaW5lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsMkJBQTJCLEVBQzVCLE1BQU0sMERBQTBELENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFTaEYsTUFBTSxPQUFPLGlCQUFpQjs7O1lBUDdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwyQkFBMkIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDbkYsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsMkJBQTJCLEVBQUUsZ0JBQWdCLENBQUM7YUFDL0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE16ZEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBNemRUaW1lbGluZUNvbnRlbnRDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWVsaW5lLWNvbnRlbnQvdGltZWxpbmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXpkVGltZWxpbmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTXpkVGltZWxpbmVDb21wb25lbnQsIE16ZFRpbWVsaW5lQ29udGVudENvbXBvbmVudCwgTXpkSWNvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW016ZFRpbWVsaW5lQ29tcG9uZW50LCBNemRUaW1lbGluZUNvbnRlbnRDb21wb25lbnQsIE16ZEljb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE16ZFRpbWVsaW5lTW9kdWxlIHsgfVxuIl19