import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioListasComponent } from './ejercicio-listas.component';

describe('EjercicioListasComponent', () => {
  let component: EjercicioListasComponent;
  let fixture: ComponentFixture<EjercicioListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
