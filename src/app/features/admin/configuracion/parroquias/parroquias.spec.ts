import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parroquias } from './parroquias';

describe('Parroquias', () => {
  let component: Parroquias;
  let fixture: ComponentFixture<Parroquias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parroquias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parroquias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
