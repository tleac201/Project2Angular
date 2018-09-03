import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAPIComponent } from './register-api.component';

describe('RegisterAPIComponent', () => {
  let component: RegisterAPIComponent;
  let fixture: ComponentFixture<RegisterAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
