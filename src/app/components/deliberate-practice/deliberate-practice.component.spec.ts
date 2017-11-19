import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliberatePracticeComponent } from './deliberate-practice.component';

describe('DeliberatePracticeComponent', () => {
  let component: DeliberatePracticeComponent;
  let fixture: ComponentFixture<DeliberatePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliberatePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliberatePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
