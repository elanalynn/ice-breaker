import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyToastmastersComponent } from './why-toastmasters.component';

describe('WhyToastmastersComponent', () => {
  let component: WhyToastmastersComponent;
  let fixture: ComponentFixture<WhyToastmastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyToastmastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyToastmastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
