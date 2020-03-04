import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics2Component } from './graphics2.component';

describe('Graphics1Component', () => {
  let component: Graphics2Component;
  let fixture: ComponentFixture<Graphics2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphics2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
