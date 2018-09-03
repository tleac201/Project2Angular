import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TJsPizzaComponent } from './tjs-pizza.component';

describe('TJsPizzaComponent', () => {
  let component: TJsPizzaComponent;
  let fixture: ComponentFixture<TJsPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TJsPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TJsPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
