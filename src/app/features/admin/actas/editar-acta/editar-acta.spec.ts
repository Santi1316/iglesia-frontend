import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarActa } from './editar-acta';

describe('EditarActa', () => {
  let component: EditarActa;
  let fixture: ComponentFixture<EditarActa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarActa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarActa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
