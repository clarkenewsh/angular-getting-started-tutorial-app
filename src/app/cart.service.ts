import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private Http: HttpClient) {}

  getShippingPrices() {
    return this.Http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addTocart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
