import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCatComponent } from './find-cat.component';

describe('FindCatComponent', () => {
  let component: FindCatComponent;
  let fixture: ComponentFixture<FindCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
