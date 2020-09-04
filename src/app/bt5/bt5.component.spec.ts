import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt5Component } from './bt5.component';

describe('Bt5Component', () => {
  let component: Bt5Component;
  let fixture: ComponentFixture<Bt5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
