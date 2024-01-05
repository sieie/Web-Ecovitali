import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEmpaqueComponent } from './material-empaque.component';

describe('MaterialEmpaqueComponent', () => {
  let component: MaterialEmpaqueComponent;
  let fixture: ComponentFixture<MaterialEmpaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialEmpaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialEmpaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
