import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagasUrbanizacionesComponent } from './plagas-urbanizaciones.component';

describe('PlagasUrbanizacionesComponent', () => {
  let component: PlagasUrbanizacionesComponent;
  let fixture: ComponentFixture<PlagasUrbanizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagasUrbanizacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagasUrbanizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
