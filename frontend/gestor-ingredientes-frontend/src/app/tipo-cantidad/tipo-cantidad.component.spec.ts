import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCantidadComponent } from './tipo-cantidad.component';

describe('TipoCantidadComponent', () => {
  let component: TipoCantidadComponent;
  let fixture: ComponentFixture<TipoCantidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoCantidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
