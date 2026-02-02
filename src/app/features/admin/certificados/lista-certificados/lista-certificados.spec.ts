import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCertificados } from './lista-certificados';

describe('ListaCertificados', () => {
  let component: ListaCertificados;
  let fixture: ComponentFixture<ListaCertificados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCertificados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCertificados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
