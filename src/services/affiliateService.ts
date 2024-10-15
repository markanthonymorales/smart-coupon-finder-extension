export const generateAffiliateLink = (originalUrl: string) => {
    const affiliateId = 'AFFILIATE123';
    const url = new URL(originalUrl);
    url.searchParams.set('affiliate_id', affiliateId);
    return url.toString();
};