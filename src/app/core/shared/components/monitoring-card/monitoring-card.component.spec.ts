import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringCardComponent } from './monitoring-card.component';

describe('MonitoringCardComponent', () => {
  let component: MonitoringCardComponent;
  let fixture: ComponentFixture<MonitoringCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
