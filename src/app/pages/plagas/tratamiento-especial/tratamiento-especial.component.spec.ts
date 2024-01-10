import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoEspecialComponent } from './tratamiento-especial.component';

describe('TratamientoEspecialComponent', () => {
  let component: TratamientoEspecialComponent;
  let fixture: ComponentFixture<TratamientoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoEspecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
