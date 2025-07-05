import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

private baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  placeOrder(order: any): Observable<any> {
    return this.http.post(this.baseUrl, order);
  }

  getMyOrders(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }

  markDelivered(orderId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/deliver/${orderId}`, {});
  }
}
