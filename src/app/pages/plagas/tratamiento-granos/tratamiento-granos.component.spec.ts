import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoGranosComponent } from './tratamiento-granos.component';

describe('TratamientoGranosComponent', () => {
  let component: TratamientoGranosComponent;
  let fixture: ComponentFixture<TratamientoGranosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoGranosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoGranosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
