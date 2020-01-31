import { TestBed } from '@angular/core/testing';

import { HttpAuthInterceptorService } from './http-auth-interceptor.service';

describe('HttpAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpAuthInterceptorService = TestBed.get(HttpAuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
