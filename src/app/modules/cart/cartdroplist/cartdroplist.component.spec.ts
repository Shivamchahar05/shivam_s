import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartdroplistComponent } from './cartdroplist.component';

describe('CartdroplistComponent', () => {
  let component: CartdroplistComponent;
  let fixture: ComponentFixture<CartdroplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartdroplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartdroplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
