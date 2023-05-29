import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFundamentalComponent } from './base-fundamental.component';

describe('BaseFundamentalComponent', () => {
  let component: BaseFundamentalComponent;
  let fixture: ComponentFixture<BaseFundamentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFundamentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseFundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
