import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiskovSubstitutionComponent } from './liskov-substitution.component';

describe('LiskovSubstitutionComponent', () => {
  let component: LiskovSubstitutionComponent;
  let fixture: ComponentFixture<LiskovSubstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiskovSubstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiskovSubstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
