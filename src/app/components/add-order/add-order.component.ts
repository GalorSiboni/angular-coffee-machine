import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Order } from '../../Order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  @Output() onAddOrder: EventEmitter<Order> = new EventEmitter();
  costumer_name: string | undefined;
  description: string | undefined;
  is_boss: boolean = false;
  price: number | undefined;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddOrder = value));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (!this.costumer_name) {
      alert('Please add a order!');
      return;
    }

    const newOrder = {
      costumer_name: this.costumer_name,
      description: this.description,
      price: this.price,
      is_boss: this.is_boss
    };

    this.onAddOrder.emit(newOrder);

    this.costumer_name = '';
    this.description = 'Regular Coffee';
    this.price = 9.90;
    this.is_boss = false;
  }
}
