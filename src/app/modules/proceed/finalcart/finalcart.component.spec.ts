import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalcartComponent } from './finalcart.component';

describe('FinalcartComponent', () => {
  let component: FinalcartComponent;
  let fixture: ComponentFixture<FinalcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
