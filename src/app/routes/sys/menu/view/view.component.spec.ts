import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysMenuViewComponent } from './view.component';

describe('SysMenuViewComponent', () => {
  let component: SysMenuViewComponent;
  let fixture: ComponentFixture<SysMenuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysMenuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
