import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineContentComponent } from './timeline-content.component';

describe('TimelineContentComponent', () => {
  let component: TimelineContentComponent;
  let fixture: ComponentFixture<TimelineContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
