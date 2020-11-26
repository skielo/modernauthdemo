import { TestBed } from '@angular/core/testing';

import { HttpSecurityInterceptor } from './http-security.interceptor';

describe('HttpSecurityInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpSecurityInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpSecurityInterceptor = TestBed.inject(HttpSecurityInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
