import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorOnlineComponent } from './online.component';

describe('MonitorOnlineComponent', () => {
  let component: MonitorOnlineComponent;
  let fixture: ComponentFixture<MonitorOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
