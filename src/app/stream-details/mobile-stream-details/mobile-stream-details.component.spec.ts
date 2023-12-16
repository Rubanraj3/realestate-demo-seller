import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStreamDetailsComponent } from './mobile-stream-details.component';

describe('MobileStreamDetailsComponent', () => {
  let component: MobileStreamDetailsComponent;
  let fixture: ComponentFixture<MobileStreamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileStreamDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileStreamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
