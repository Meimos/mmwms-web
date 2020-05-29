import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysDictEditComponent } from './edit.component';

describe('SysDictEditComponent', () => {
  let component: SysDictEditComponent;
  let fixture: ComponentFixture<SysDictEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysDictEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysDictEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
