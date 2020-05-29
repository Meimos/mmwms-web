import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorJobViewComponent } from './view.component';

describe('MonitorJobViewComponent', () => {
  let component: MonitorJobViewComponent;
  let fixture: ComponentFixture<MonitorJobViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorJobViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorJobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
