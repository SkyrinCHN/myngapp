import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo04TestComponent } from './demo04-test.component';

describe('Demo04TestComponent', () => {
  let component: Demo04TestComponent;
  let fixture: ComponentFixture<Demo04TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo04TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo04TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
