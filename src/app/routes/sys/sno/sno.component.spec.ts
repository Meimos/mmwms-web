import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysSnoComponent } from './sno.component';

describe('SysSnoComponent', () => {
  let component: SysSnoComponent;
  let fixture: ComponentFixture<SysSnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysSnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
