import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => (this.orders = orders));
  }

  deleteOrder(order: Order) {
    this.orderService
      .deleteOrder(order)
      .subscribe(
        () => (this.orders = this.orders.filter((t) => t.id !== order.id))
      );
  }

  addOrder(order: Order) {
    this.orderService.addOrder(order).subscribe((order: Order) => this.orders.push(order));
  }
}
