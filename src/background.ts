chrome.runtime.onInstalled.addListener(() => {
    console.log('Smart Coupon Finder Installed.');
});

// Listen for messages from the popup to apply coupons
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_COUPONS') {
        console.log('// Fetch coupons from API or AI service');
        // Fetch coupons from API or AI service
        const coupons = [
        { code: 'SAVE10', description: 'Save 10%' },
        { code: 'FREESHIP', description: 'Free Shipping' }
        ];
        sendResponse({ coupons });
    }
});