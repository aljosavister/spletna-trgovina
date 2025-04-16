import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IZDELKI, Izdelek } from './products';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  izdelki: Izdelek[] = IZDELKI;
  constructor(public cartService: CartService) {}
}
