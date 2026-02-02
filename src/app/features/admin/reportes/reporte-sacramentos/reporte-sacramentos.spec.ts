import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSacramentos } from './reporte-sacramentos';

describe('ReporteSacramentos', () => {
  let component: ReporteSacramentos;
  let fixture: ComponentFixture<ReporteSacramentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteSacramentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteSacramentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
