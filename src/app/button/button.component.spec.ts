import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter, DebugElement } from '@angular/core';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {

  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let debug: DebugElement;
  let button: HTMLElement;

  // Definir un faux module dans lequel greffer mon faux component
  beforeEach( async(()=>{
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(()=> {
    // Fausse classe ButtonComponent
    // Human { eyes: string, arms: number}
    fixture = TestBed.createComponent(ButtonComponent);
    // Fausse instance de la classe ButtonComponent
    // new Human {eyes: brown, arms: 2}
    component = fixture.componentInstance;
    // N'est pas le vrai element HTML
    debug = fixture.debugElement;
    button = debug.query(By.css('button')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', ()=> {
    // expect(component).toBe(true);
    expect(component).toBeTruthy();
  });

  it('should create property signal as EventEmitter', () => {
    expect(component.signal instanceof EventEmitter).toBe(true);
  });

  it('should call onClick function on click', ()=> {
    spyOn(component, 'onClick');
    button.click();
    expect(component.onClick).toHaveBeenCalled();
  });

  it('should change value of yolo property', () => {
    button.click();
    expect(component.yolo).toBe('YOLO');
  });

  it('should emit signal event when button is click', () => {
    spyOn(component.signal, 'emit');
    button.click();
    expect(component.signal.emit).toHaveBeenCalledWith('hello');
  });

});