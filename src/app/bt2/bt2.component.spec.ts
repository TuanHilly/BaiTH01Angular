import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2Component } from './bt2.component';

describe('Bt2Component', () => {
  let component: Bt2Component;
  let fixture: ComponentFixture<Bt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
