import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.getProductById(productId);
  }

  getProductById(id: string | null): Product | undefined {
    // Assuming you have a method to get a product by its ID
    const products: Product[] = [
      {
        id: '1',
        name: 'Product 1',
        price: 100,
        image: 'image1.jpg',
        description: 'Description 1',
      },
      {
        id: '2',
        name: 'Product 2',
        price: 200,
        image: 'image2.jpg',
        description: 'Description 2',
      },
      // Add more products here
    ];
    return products.find((product) => product.id === id);
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    } else {
      console.error('Product is undefined');
    }
  }
}
