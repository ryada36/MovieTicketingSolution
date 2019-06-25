import { TestBed, inject } from '@angular/core/testing';

import { UserReviewService } from './user-review.service';

describe('UserReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserReviewService]
    });
  });

  it('should be created', inject([UserReviewService], (service: UserReviewService) => {
    expect(service).toBeTruthy();
  }));
});
