import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActa } from './detalle-acta';

describe('DetalleActa', () => {
  let component: DetalleActa;
  let fixture: ComponentFixture<DetalleActa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleActa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleActa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
