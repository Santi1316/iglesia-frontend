import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSolicitudes } from './reporte-solicitudes';

describe('ReporteSolicitudes', () => {
  let component: ReporteSolicitudes;
  let fixture: ComponentFixture<ReporteSolicitudes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteSolicitudes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteSolicitudes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
