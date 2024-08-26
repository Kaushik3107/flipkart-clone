import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
        name: 'HP Laptop',
        price: 75000,
        image: 'assets/lapi1.jpeg',
        description: 'Description 1',
      },
      {
        id: '2',
        name: 'MAC Book Laptop',
        price: 150000,
        image: 'assets/lapi2.jpeg',
        description: 'Description 2',
      },
      {
        id: '3',
        name: 'Redmi Mobile 13',
        price: 20000,
        image: 'assets/lapi2.jpeg',
        description: 'Description 2',
      },
      {
        id: '4',
        name: 'iPhone 15',
        price: 180000,
        image: 'assets/lapi2.jpeg',
        description: 'Description 2',
      },
      {
        id: '5',
        name: 'Samsung s23',
        price: 150000,
        image: 'assets/lapi2.jpeg',
        description: 'Description 2',
      },
      // Add more products here
    ];
    return products.find((product) => product.id === id);
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.router.navigate(['/cart']);
    } else {
      console.error('Product is undefined');
    }
  }
}
