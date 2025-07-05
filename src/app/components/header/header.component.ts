import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Products', icon: 'pi pi-box', routerLink: '/products' },
    { label: 'My Orders', icon: 'pi pi-shopping-cart', routerLink: '/orders' },
    { label: 'Admin', icon: 'pi pi-lock', routerLink: '/admin' }
  ];
}
