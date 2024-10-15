import axios from 'axios';
import * as cheerio from 'cheerio';
import CouponType from '../types/coupon-type';

export default class Abstract {
    public url: string = '';
    public coupons: Array<CouponType> = [];

    async setUrl(url: string = ''): Promise<void> {
        this.url = url;
    }

    async load(): Promise<any> {
        const response = await axios.get(this.url);
        return cheerio.load(response.data);
    }

    async fromURL(): Promise<any> {
        try {
            return await cheerio.fromURL(this.url);
        } catch(e) {
            console.log('from url error!', e);
        }
    }

    getUrl(): string {
        return this.url;
    }

    getCoupons(): Array<CouponType> {
        return this.coupons;
    }

    async apiLoad(url: string = ''): Promise<any|null> {
        return await axios.get(url);
    }
}