import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../Order';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-coffee-item',
  templateUrl: './order-coffee-item.component.html',
  styleUrls: ['./order-coffee-item.component.css']
})
export class OrderCoffeeItemComponent implements OnInit {
  @Input() order!: Order;
  @Output() onDeleteTask: EventEmitter<Order> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Order> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void { }

  onDelete(order: any) {
    this.onDeleteTask.emit(order);
  }
}

