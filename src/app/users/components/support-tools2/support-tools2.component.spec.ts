import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTools2Component } from './support-tools2.component';

describe('SupportTools2Component', () => {
  let component: SupportTools2Component;
  let fixture: ComponentFixture<SupportTools2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTools2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTools2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
