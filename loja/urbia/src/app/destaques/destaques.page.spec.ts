import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestaquesPage } from './destaques.page';

describe('DestaquesPage', () => {
  let component: DestaquesPage;
  let fixture: ComponentFixture<DestaquesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DestaquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
