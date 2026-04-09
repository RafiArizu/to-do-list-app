import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatiscsPage } from './statiscs.page';

describe('StatiscsPage', () => {
  let component: StatiscsPage;
  let fixture: ComponentFixture<StatiscsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatiscsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
