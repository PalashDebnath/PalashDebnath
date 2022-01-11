import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretorComponent } from './interpretor.component';

describe('InterpretorComponent', () => {
  let component: InterpretorComponent;
  let fixture: ComponentFixture<InterpretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
