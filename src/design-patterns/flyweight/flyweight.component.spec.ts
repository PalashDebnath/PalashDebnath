import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyweightComponent } from './flyweight.component';

describe('FlyweightComponent', () => {
  let component: FlyweightComponent;
  let fixture: ComponentFixture<FlyweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyweightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
