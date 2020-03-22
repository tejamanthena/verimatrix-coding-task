import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'verimatrix-coding-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('verimatrix-coding-challenge');
  });

  it('should display number 1 as one', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const convertNumber = app.convertNumberToWords(1);
    fixture.detectChanges();
    expect(convertNumber).toEqual('One ');
  });

  it('should display number 722 as "Seven Hundred and Twenty Two"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const convertNumber = app.convertNumberToWords(722);
    fixture.detectChanges();
    expect(convertNumber).toEqual('Seven Hundred and Twenty Two ');
  });

  it('should display number 99999 as "Ninety Nine Thousand Nine Hundred and Ninety Nine "', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const convertNumber = app.convertNumberToWords(99999);
    fixture.detectChanges();
    expect(convertNumber).toEqual(
      'Ninety Nine Thousand Nine Hundred and Ninety Nine '
    );
  });

  it(`Input should be a number`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[type="number"]')).toBeTruthy();
  });

  it(`Input should not be a negative number`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const el = input.nativeElement;
      el.value = -1;
      el.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.validation').textContent).toContain(
        'Please enter number between 1 and 99,999'
      );
    });
  });
});
