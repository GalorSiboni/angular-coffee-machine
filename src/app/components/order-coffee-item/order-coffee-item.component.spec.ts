import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCoffeeItemComponent } from './order-coffee-item.component';

describe('OrderCoffeeItemComponent', () => {
  let component: OrderCoffeeItemComponent;
  let fixture: ComponentFixture<OrderCoffeeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCoffeeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCoffeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
