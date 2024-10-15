import Abstract from './Abstract';
import CouponInterface from '../interfaces/CouponInterface';
import CouponType from '../types/coupon-type';

export default class CouponDotCom extends Abstract implements CouponInterface {
    private readonly containerElement: string = 'div[data-testid="vouchers-ui-voucher-card-top-container"]';
    private originalUrl: string = 'https://www.coupons.com/';
    private exludes: Array<string> = ['Sent via email', 'Sent to email', 'Verify for code'];

    async scrapeCoupons(): Promise<void> {
        try {
            this.setUrl(`${this.originalUrl}coupon-codes/adidas`);
            const $ = await this.load();
            const containers = $(this.containerElement);

            for(const el of containers) {
                const getData = await this.extractCouponData($, el);
                if(getData) {
                    this.coupons.push(getData);
                }
            }

            this.coupons = this.coupons.filter(i => (i.title && i.description));

            console.log('Done scraping coupons.');
        } catch (e) {
            console.log('Something went wrong!', e);
        }
    }

    async extractCouponData($: any, el: any): Promise<CouponType|null> {
        let extractData = $(el).extract({
            title: 'div[data-testid="vouchers-ui-voucher-card-captions"] > div[data-testid="vouchers-ui-voucher-card-captions"]',
            description: 'h3',
            expiry: 'span:contains(Expire)',
        });

        const codeId = $(el).parent().parent().parent().find('div[data-attribute="code"]').data('id');
        const script = JSON.parse($('body').find('script[id="__NEXT_DATA__"]').text());
        if (codeId) {
            const clientId = script.query.clientId;
            const response = await this.apiLoad(`${this.originalUrl}api/voucher/country/us/client/${clientId}/id/${codeId}`);
            if(response && !this.exludes.includes(response?.data?.code)) {
                extractData.title = response?.data?.title;
                extractData.description = response?.data?.description;
                extractData.expiry = response?.data?.isExpired ? 'Already Expired' : extractData.expiry;
                extractData.code = response?.data?.code;
                extractData.try = false;
                return extractData;
            }
        }

        return null;
    }
}