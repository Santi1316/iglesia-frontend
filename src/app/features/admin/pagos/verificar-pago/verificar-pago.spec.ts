import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarPago } from './verificar-pago';

describe('VerificarPago', () => {
  let component: VerificarPago;
  let fixture: ComponentFixture<VerificarPago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarPago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarPago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
