import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
userId: number = 0;
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  fetchOrders() {
    this.orderService.getMyOrders(this.userId).subscribe((data:any) => {
      this.orders = data;
    });
  }
}
