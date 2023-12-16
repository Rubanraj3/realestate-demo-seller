import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCompletedStreamComponent } from './web-completed-stream.component';

describe('WebCompletedStreamComponent', () => {
  let component: WebCompletedStreamComponent;
  let fixture: ComponentFixture<WebCompletedStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCompletedStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCompletedStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
