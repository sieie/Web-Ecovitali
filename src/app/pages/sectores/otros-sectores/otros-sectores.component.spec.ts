import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosSectoresComponent } from './otros-sectores.component';

describe('OtrosSectoresComponent', () => {
  let component: OtrosSectoresComponent;
  let fixture: ComponentFixture<OtrosSectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosSectoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosSectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
