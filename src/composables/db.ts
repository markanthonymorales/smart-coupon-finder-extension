import Dexie, { Table } from 'dexie';
import { Coupon } from '../types/coupon-type';

export class MySubClassedDexie extends Dexie {
  // 'recipes' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  coupon!: Table<Coupon>;

  constructor() {
    super('smart_coupon_finder_db');
    this.version(1).stores({
      coupon: '++id, code, title, description, expiry, site',
    });
  }
}

export const db = new MySubClassedDexie();