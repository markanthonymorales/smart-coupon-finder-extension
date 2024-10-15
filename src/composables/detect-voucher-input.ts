export default async function detectVoucherInput(link: string): Promise<any> {
    // @ts-ignore
    const inputFields: Array<any> = document.querySelectorAll('input');
    console.log(inputFields);
    for (let input of inputFields) {
        if (input.type === 'text' && input.placeholder.toLowerCase().includes('voucher') || 
            input.placeholder.toLowerCase().includes('coupon')) {
        return input;
        }
    }
    return null;
};
