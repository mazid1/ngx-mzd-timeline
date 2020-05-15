import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MzdTimelineContentComponent } from './timeline-content.component';

describe('MzdTimelineContentComponent', () => {
  let component: MzdTimelineContentComponent;
  let fixture: ComponentFixture<MzdTimelineContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MzdTimelineContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MzdTimelineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
