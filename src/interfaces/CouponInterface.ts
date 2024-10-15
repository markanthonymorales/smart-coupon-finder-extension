import CouponType from '../types/coupon-type';

export default interface CouponInterface {
    setUrl(url: string): void;
    getUrl(): string;
    scrapeCoupons(): Promise<void>;
    getCoupons(): Array<CouponType>;
    scrapeCoupons(): void;
    extractCouponData($: any, el: any): Promise<CouponType|null>
}