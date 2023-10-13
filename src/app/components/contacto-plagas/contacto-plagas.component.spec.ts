import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPlagasComponent } from './contacto-plagas.component';

describe('ContactoPlagasComponent', () => {
  let component: ContactoPlagasComponent;
  let fixture: ComponentFixture<ContactoPlagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoPlagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoPlagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
