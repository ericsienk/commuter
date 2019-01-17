import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationStopComponent } from './station-stop.component';

describe('StationStopComponent', () => {
  let component: StationStopComponent;
  let fixture: ComponentFixture<StationStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
