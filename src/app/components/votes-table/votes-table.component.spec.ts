import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesTableComponent } from './votes-table.component';

describe('VotesTableComponent', () => {
  let component: VotesTableComponent;
  let fixture: ComponentFixture<VotesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
