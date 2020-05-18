import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MzdIconComponent } from './icon.component';

describe('MzdIconComponent', () => {
  let component: MzdIconComponent;
  let fixture: ComponentFixture<MzdIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MzdIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MzdIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
