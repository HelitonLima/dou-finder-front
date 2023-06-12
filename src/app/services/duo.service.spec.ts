/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DuoService } from './duo.service';

describe('Service: Duo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DuoService]
    });
  });

  it('should ...', inject([DuoService], (service: DuoService) => {
    expect(service).toBeTruthy();
  }));
});
