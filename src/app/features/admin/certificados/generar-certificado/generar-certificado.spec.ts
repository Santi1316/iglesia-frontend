import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCertificado } from './generar-certificado';

describe('GenerarCertificado', () => {
  let component: GenerarCertificado;
  let fixture: ComponentFixture<GenerarCertificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarCertificado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarCertificado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
