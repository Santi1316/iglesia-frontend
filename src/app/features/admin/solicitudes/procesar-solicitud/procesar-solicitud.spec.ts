import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesarSolicitud } from './procesar-solicitud';

describe('ProcesarSolicitud', () => {
  let component: ProcesarSolicitud;
  let fixture: ComponentFixture<ProcesarSolicitud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesarSolicitud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesarSolicitud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
