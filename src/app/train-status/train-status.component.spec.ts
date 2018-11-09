import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainStatusComponent } from './train-status.component';

describe('TrainStatusComponent', () => {
  let component: TrainStatusComponent;
  let fixture: ComponentFixture<TrainStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
