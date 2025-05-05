import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IZDELKI, Izdelek } from './products';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatTabsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  izdelki: Izdelek[] = IZDELKI;
  kategorije = Array.from(new Set(this.izdelki.map(i => i.kategorija)));
  constructor(public cartService: CartService) {}

  getIzdelkiPoKategoriji(kategorija: string): Izdelek[] {
    return this.izdelki.filter(i => i.kategorija === kategorija);
  }
  
}
