import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MainComponent
      ],
    }).compileComponents();
  });

  it('should create the main component', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const Main = fixture.componentInstance;
    expect(Main).toBeTruthy();
  });

  it(`should have as title 'profile'`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const Main = fixture.componentInstance;
    expect(Main.title).toEqual('profile');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Application profile is running!');
  });
});
