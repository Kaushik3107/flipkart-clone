import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = []; // Explicitly type the array

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }
}
