import { TestBed, inject } from '@angular/core/testing';

import { PizzaAPIService } from './pizza-api.service';

describe('PizzaAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaAPIService]
    });
  });

  it('should be created', inject([PizzaAPIService], (service: PizzaAPIService) => {
    expect(service).toBeTruthy();
  }));
});
