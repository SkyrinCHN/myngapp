import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo03DirectivesComponent } from './demo03-directives.component';

describe('Demo03DirectivesComponent', () => {
  let component: Demo03DirectivesComponent;
  let fixture: ComponentFixture<Demo03DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo03DirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo03DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
