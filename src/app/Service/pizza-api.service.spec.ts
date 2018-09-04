import { TestBed, inject } from '@angular/core/testing';

import { AccountService } from './pizza-api.service';

describe('PizzaAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService]
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
