import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysSnoEditComponent } from './edit.component';

describe('SysSnoEditComponent', () => {
  let component: SysSnoEditComponent;
  let fixture: ComponentFixture<SysSnoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysSnoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSnoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
