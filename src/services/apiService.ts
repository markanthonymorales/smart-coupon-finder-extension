import CouponInterface from '../interfaces/CouponInterface';
import CouponType from '../types/coupon-type';

export default class ApiService {
  private readonly couponService: CouponInterface;

  constructor(couponService: CouponInterface) {
    this.couponService  = couponService ;
  }

  async fetchData(): Promise<Array<CouponType>> {
    await this.couponService.scrapeCoupons();
    return this.couponService.getCoupons();
  }
}