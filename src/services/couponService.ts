import copy from 'copy-to-clipboard';

const list_of_input: Array<string> = [
    'discount_name',
    'promo',
    'coupon',
    'voucher'
];

export async function findCouponFieldAndApply(bestCoupon: string){
    copy(bestCoupon);
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id! },
              function: async (elms: Array<string>, couponCode: string) => {
                // Coupon Finder Logic
                let input: any = null;
                for (let elm of elms) {
                    if(document.querySelector(`input[name="${elm}"]`)) {
                        input = document.querySelector(`input[name="${elm}"]`) as HTMLInputElement;
                    }
                }
    
                if (input) {
                  input.value = couponCode;
                  let button: any = input.form.querySelector('[type="submit"]') as HTMLButtonElement;
                  button.click();
                }
                
                return true;
            },
              args: [list_of_input, bestCoupon]
            }, async (response: any) => {
                resolve(response[0].result);
            });
        });
    });
};