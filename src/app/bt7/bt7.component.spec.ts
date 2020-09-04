import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt7Component } from './bt7.component';

describe('Bt7Component', () => {
  let component: Bt7Component;
  let fixture: ComponentFixture<Bt7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
