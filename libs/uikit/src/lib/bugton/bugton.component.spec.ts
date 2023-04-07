import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugtonComponent } from './bugton.component';

import { getSome } from '@nxlatest/helpers';

describe('BugtonComponent', () => {
  let component: BugtonComponent;
  let fixture: ComponentFixture<BugtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BugtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 5', () => {
    expect(getSome(1)).toBe(5);
  });
});
