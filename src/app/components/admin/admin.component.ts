import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
orderId: number = 0;
  message = '';

  constructor(private orderService: OrderService) {}

  markDelivered() {
    this.orderService.markDelivered(this.orderId).subscribe(() => {
      this.message = "Order marked as delivered.";
    });
  }
}
