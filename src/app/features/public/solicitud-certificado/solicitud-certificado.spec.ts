import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCertificado } from './solicitud-certificado';

describe('SolicitudCertificado', () => {
  let component: SolicitudCertificado;
  let fixture: ComponentFixture<SolicitudCertificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudCertificado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudCertificado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
