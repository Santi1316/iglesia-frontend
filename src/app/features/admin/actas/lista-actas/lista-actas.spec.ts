import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActas } from './lista-actas';

describe('ListaActas', () => {
  let component: ListaActas;
  let fixture: ComponentFixture<ListaActas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaActas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaActas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
