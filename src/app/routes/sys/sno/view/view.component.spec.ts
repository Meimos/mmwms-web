import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysSnoViewComponent } from './view.component';

describe('SysSnoViewComponent', () => {
  let component: SysSnoViewComponent;
  let fixture: ComponentFixture<SysSnoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysSnoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSnoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
