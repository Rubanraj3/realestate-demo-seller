import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeletedStreamComponent } from './compeleted-stream.component';

describe('CompeletedStreamComponent', () => {
  let component: CompeletedStreamComponent;
  let fixture: ComponentFixture<CompeletedStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompeletedStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompeletedStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
