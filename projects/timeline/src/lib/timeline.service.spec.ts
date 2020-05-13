import { TestBed } from '@angular/core/testing';

import { TimelineService } from './timeline.service';

describe('TimelineService', () => {
  let service: TimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
