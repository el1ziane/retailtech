import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LojaDetalhePage } from './loja-detalhe.page';

describe('LojaDetalhePage', () => {
  let component: LojaDetalhePage;
  let fixture: ComponentFixture<LojaDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
