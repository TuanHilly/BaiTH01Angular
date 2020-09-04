import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt6Component } from './bt6.component';

describe('Bt6Component', () => {
  let component: Bt6Component;
  let fixture: ComponentFixture<Bt6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
