import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosclaveAuditoriaComponent } from './puntosclave-auditoria.component';

describe('PuntosclaveAuditoriaComponent', () => {
  let component: PuntosclaveAuditoriaComponent;
  let fixture: ComponentFixture<PuntosclaveAuditoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosclaveAuditoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosclaveAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
