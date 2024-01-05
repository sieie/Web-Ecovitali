import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagasEscuelasComponent } from './plagas-escuelas.component';

describe('PlagasEscuelasComponent', () => {
  let component: PlagasEscuelasComponent;
  let fixture: ComponentFixture<PlagasEscuelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagasEscuelasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagasEscuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
