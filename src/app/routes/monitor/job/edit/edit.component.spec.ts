import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorJobEditComponent } from './edit.component';

describe('MonitorJobEditComponent', () => {
  let component: MonitorJobEditComponent;
  let fixture: ComponentFixture<MonitorJobEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorJobEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorJobEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
