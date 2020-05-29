import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysDictViewComponent } from './view.component';

describe('SysDictViewComponent', () => {
  let component: SysDictViewComponent;
  let fixture: ComponentFixture<SysDictViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysDictViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysDictViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
