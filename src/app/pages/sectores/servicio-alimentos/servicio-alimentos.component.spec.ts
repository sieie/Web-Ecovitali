import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAlimentosComponent } from './servicio-alimentos.component';

describe('ServicioAlimentosComponent', () => {
  let component: ServicioAlimentosComponent;
  let fixture: ComponentFixture<ServicioAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
