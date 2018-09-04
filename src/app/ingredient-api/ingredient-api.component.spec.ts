import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientApiComponent } from './ingredient-api.component';

describe('IngredientApiComponent', () => {
  let component: IngredientApiComponent;
  let fixture: ComponentFixture<IngredientApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
