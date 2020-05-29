import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysMenuEditComponent } from './edit.component';

describe('SysMenuEditComponent', () => {
  let component: SysMenuEditComponent;
  let fixture: ComponentFixture<SysMenuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysMenuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysMenuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
