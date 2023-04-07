import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SomeelemComponent } from './someelem.component';

describe('SomeelemComponent', () => {
  let component: SomeelemComponent;
  let fixture: ComponentFixture<SomeelemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomeelemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SomeelemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
