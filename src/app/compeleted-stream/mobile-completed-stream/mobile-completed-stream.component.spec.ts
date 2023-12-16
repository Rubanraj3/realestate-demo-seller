import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCompletedStreamComponent } from './mobile-completed-stream.component';

describe('MobileCompletedStreamComponent', () => {
  let component: MobileCompletedStreamComponent;
  let fixture: ComponentFixture<MobileCompletedStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCompletedStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCompletedStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
