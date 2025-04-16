import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Izdelek } from '../../app/pages/shop/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<Izdelek[]>([]);
  items$ = this.itemsSubject.asObservable();

  get items(): Izdelek[] {
    return this.itemsSubject.value;
  }

  addItem(item: Izdelek): void {
    this.itemsSubject.next([...this.items, item]);
  }

  clearCart(): void {
    this.itemsSubject.next([]);
  }
}
