import { TestBed } from '@angular/core/testing';

import { MovieInterceptor } from './movie.interceptor';

describe('MovieInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MovieInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MovieInterceptor = TestBed.inject(MovieInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
