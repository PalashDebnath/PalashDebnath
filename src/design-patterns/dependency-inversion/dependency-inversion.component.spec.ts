import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInversionComponent } from './dependency-inversion.component';

describe('DependencyInversionComponent', () => {
  let component: DependencyInversionComponent;
  let fixture: ComponentFixture<DependencyInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
