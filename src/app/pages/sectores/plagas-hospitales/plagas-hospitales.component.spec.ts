import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagasHospitalesComponent } from './plagas-hospitales.component';

describe('PlagasHospitalesComponent', () => {
  let component: PlagasHospitalesComponent;
  let fixture: ComponentFixture<PlagasHospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagasHospitalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagasHospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
