import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardineriaComponent } from './jardineria.component';

describe('JardineriaComponent', () => {
  let component: JardineriaComponent;
  let fixture: ComponentFixture<JardineriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JardineriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JardineriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
