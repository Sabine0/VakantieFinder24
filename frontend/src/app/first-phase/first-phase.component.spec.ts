import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPhaseComponent } from './first-phase.component';

describe('FirstPhaseComponent', () => {
  let component: FirstPhaseComponent;
  let fixture: ComponentFixture<FirstPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
