import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MzdTimelineComponent } from './timeline.component';

describe('MzdTimelineComponent', () => {
  let component: MzdTimelineComponent;
  let fixture: ComponentFixture<MzdTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MzdTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MzdTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
