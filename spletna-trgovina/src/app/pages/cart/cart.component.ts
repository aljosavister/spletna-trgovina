import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Izdelek } from '../shop/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AsyncPipe, MatCardModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  getSkupnaCena(artikli: Izdelek[]): number {
    return artikli.reduce((vsota, izdelek) => vsota + izdelek.cena, 0);
  }

  zakljuciNakup() {
    alert('Hvala za nakup! (simulirano)');
    this.cartService.clearCart();
  }
}
