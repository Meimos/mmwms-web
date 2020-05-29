import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysNoticeEditComponent } from './edit.component';

describe('SysNoticeEditComponent', () => {
  let component: SysNoticeEditComponent;
  let fixture: ComponentFixture<SysNoticeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysNoticeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysNoticeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
