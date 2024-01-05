import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagasInstGubernamentalesComponent } from './plagas-inst-gubernamentales.component';

describe('PlagasInstGubernamentalesComponent', () => {
  let component: PlagasInstGubernamentalesComponent;
  let fixture: ComponentFixture<PlagasInstGubernamentalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagasInstGubernamentalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlagasInstGubernamentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
