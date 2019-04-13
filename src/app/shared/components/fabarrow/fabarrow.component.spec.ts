import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FABArrowComponent } from './fabarrow.component';

describe('FABArrowComponent', () => {
  let component: FABArrowComponent;
  let fixture: ComponentFixture<FABArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FABArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FABArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
