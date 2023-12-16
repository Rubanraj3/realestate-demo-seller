import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStreamDetailsComponent } from './web-stream-details.component';

describe('WebStreamDetailsComponent', () => {
  let component: WebStreamDetailsComponent;
  let fixture: ComponentFixture<WebStreamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebStreamDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebStreamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
