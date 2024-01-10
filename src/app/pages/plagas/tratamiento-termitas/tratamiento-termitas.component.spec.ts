import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoTermitasComponent } from './tratamiento-termitas.component';

describe('TratamientoTermitasComponent', () => {
  let component: TratamientoTermitasComponent;
  let fixture: ComponentFixture<TratamientoTermitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoTermitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoTermitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
