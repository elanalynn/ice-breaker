import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElanasHierarchyComponent } from './elanas-hierarchy.component';

describe('ElanasHierarchyComponent', () => {
  let component: ElanasHierarchyComponent;
  let fixture: ComponentFixture<ElanasHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElanasHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElanasHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
