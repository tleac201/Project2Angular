import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardproductApiComponent } from './standardproduct-api.component';

describe('StandardproductApiComponent', () => {
  let component: StandardproductApiComponent;
  let fixture: ComponentFixture<StandardproductApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardproductApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardproductApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
