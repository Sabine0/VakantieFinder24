import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountoverzichtComponent } from './accountoverzicht.component';

describe('AccountoverzichtComponent', () => {
  let component: AccountoverzichtComponent;
  let fixture: ComponentFixture<AccountoverzichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountoverzichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
