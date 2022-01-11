import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceSegregationComponent } from './interface-segregation.component';

describe('InterfaceSegregationComponent', () => {
  let component: InterfaceSegregationComponent;
  let fixture: ComponentFixture<InterfaceSegregationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceSegregationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceSegregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
