import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionCertificado } from './verificacion-certificado';

describe('VerificacionCertificado', () => {
  let component: VerificacionCertificado;
  let fixture: ComponentFixture<VerificacionCertificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacionCertificado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificacionCertificado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
