import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullObjectComponent } from './null-object.component';

describe('NullObjectComponent', () => {
  let component: NullObjectComponent;
  let fixture: ComponentFixture<NullObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NullObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NullObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
