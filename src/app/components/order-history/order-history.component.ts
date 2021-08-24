import { Component, OnInit } from '@angular/core';
import {Order} from "../../Order";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
