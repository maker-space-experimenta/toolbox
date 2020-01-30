import { TestBed } from '@angular/core/testing';

import { DevicesRepository } from './devices.service';

describe('DevicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevicesRepository = TestBed.get(DevicesRepository);
    expect(service).toBeTruthy();
  });
});
