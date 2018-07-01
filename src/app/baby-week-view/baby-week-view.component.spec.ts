import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyWeekViewComponent } from './baby-week-view.component';

describe('BabyWeekViewComponent', () => {
  let component: BabyWeekViewComponent;
  let fixture: ComponentFixture<BabyWeekViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyWeekViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
