import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesadoresAlimentosComponent } from './procesadores-alimentos.component';

describe('ProcesadoresAlimentosComponent', () => {
  let component: ProcesadoresAlimentosComponent;
  let fixture: ComponentFixture<ProcesadoresAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesadoresAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesadoresAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
