import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysConfigEditComponent } from './edit.component';

describe('SysConfigEditComponent', () => {
  let component: SysConfigEditComponent;
  let fixture: ComponentFixture<SysConfigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysConfigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
