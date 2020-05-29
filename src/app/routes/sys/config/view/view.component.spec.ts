import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysConfigViewComponent } from './view.component';

describe('SysConfigViewComponent', () => {
  let component: SysConfigViewComponent;
  let fixture: ComponentFixture<SysConfigViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysConfigViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysConfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
