import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CounterComponent } from './counter.component';
import{ By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent; 
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query (By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should increment the counter number by one', ()=>{
    const initialValue = component.counter;

    component.increment();
    fixture.detectChanges();
    const newValue = component.counter;

    expect(newValue).toBeGreaterThan(initialValue);
  })

  it('shoul decrement the counter number by one', ()=>{
    const initialValue = component.counter;

    component.decrement();
    fixture.detectChanges();
    const newValue = component.counter;

    expect(newValue).toBeLessThan(initialValue);
  })

  it('should display the counter number on screen, after being incremented by one ', ()=>{
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 2');
  })

  it('should display the counter number on screen, after being decremented by one ', ()=>{
    component.decrement();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 0');
  })

  it('should display current number of the counter', () => {
    expect(htmlElement.textContent).toEqual('Number: 1');
  })

});