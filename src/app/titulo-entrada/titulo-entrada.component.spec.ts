import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloEntradaComponent } from './titulo-entrada.component';

describe('TituloEntradaComponent', () => {
  let component: TituloEntradaComponent;
  let fixture: ComponentFixture<TituloEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
