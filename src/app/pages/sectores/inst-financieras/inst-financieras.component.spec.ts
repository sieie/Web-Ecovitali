import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstFinancierasComponent } from './inst-financieras.component';

describe('InstFinancierasComponent', () => {
  let component: InstFinancierasComponent;
  let fixture: ComponentFixture<InstFinancierasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstFinancierasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstFinancierasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
