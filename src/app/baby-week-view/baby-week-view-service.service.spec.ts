import { TestBed, inject } from '@angular/core/testing';

import { BabyWeekViewServiceService } from './baby-week-view-service.service';

describe('BabyWeekViewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabyWeekViewServiceService]
    });
  });

  it('should be created', inject([BabyWeekViewServiceService], (service: BabyWeekViewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
