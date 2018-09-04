import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartApiComponent } from './shoppingcart-api.component';

describe('ShoppingcartApiComponent', () => {
  let component: ShoppingcartApiComponent;
  let fixture: ComponentFixture<ShoppingcartApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
