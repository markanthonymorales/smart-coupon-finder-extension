import { findCouponFieldAndApply } from '../services/couponService';

// Listener for messages from background or popup
console.log('// Listener for messages from background or popup');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('request.type');
  console.log(request.type);
  if (request.type === 'APPLY_COUPON') {
    findCouponFieldAndApply(document, request.coupon);
    sendResponse({ status: 'success' });
  }
});