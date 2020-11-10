import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcardComponent } from './gridcard.component';

describe('GridcardComponent', () => {
  let component: GridcardComponent;
  let fixture: ComponentFixture<GridcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
