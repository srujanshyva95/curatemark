/**
 * Netlify Serverless Function: Automated Manufacturer Order Drafting
 * Endpoint: /.netlify/functions/create-manufacturer-draft
 * Purpose: Pre-populates orders in Qiink, Printrove, and Shiprocket in
 *          'Draft / Pending Payment' status, leaving only the payment step for the founder.
 */

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const orderId = payload.id || payload.orderId;
    const { customer, items = [], packages = [] } = payload;

    if (!orderId || !customer) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required orderId or customer payload' })
      };
    }

    const draftedPackages = (packages.length > 0 ? packages : [{ category: 'General', items }]).map((pkg, idx) => {
      const category = pkg.category || 'Streetwear';
      let platform = 'Shiprocket';
      let payUrl = 'https://app.shiprocket.in/orders/processing';
      let portalName = 'Shiprocket Automated EDC Hub';

      if (category === 'Streetwear') {
        platform = 'Qikink';
        payUrl = 'https://qikink.com/app/orders/pending-payment';
        portalName = 'Qikink Dropship Console';
      } else if (category === 'Desk & Setup') {
        platform = 'Printrove';
        payUrl = 'https://printrove.com/orders/unpaid';
        portalName = 'Printrove Merchant Dashboard';
      }

      const pkgItems = pkg.items || items;
      const baseCost = pkgItems.reduce((sum, item) => sum + ((item.factoryCost || item.price * 0.4) * (item.quantity || 1)), 0);
      const draftRef = `${platform.substring(0, 3).toUpperCase()}-DRAFT-${orderId.replace('CM-', '')}-${idx + 1}`;

      return {
        packageId: pkg.packageId || `PKG-${orderId}-${idx + 1}`,
        category,
        platform,
        portalName,
        status: 'Draft Created • Pending Payment',
        draftReference: draftRef,
        baseCostToPay: Math.round(baseCost),
        payUrl,
        directPayDeepLink: `${payUrl}?ref=${draftRef}`,
        sender: {
          brand: 'CurateMark Direct',
          phone: '916382475935',
          email: 'fulfillment@curatemark.in'
        },
        recipient: {
          name: customer.name,
          phone: customer.phone,
          address: customer.address,
          city: customer.city || 'India',
          pincode: customer.pincode || ''
        },
        items: pkgItems.map(i => ({
          name: i.name,
          variant: i.variant,
          quantity: i.quantity,
          factoryCost: i.factoryCost
        })),
        createdAt: new Date().toISOString()
      };
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        orderId,
        message: 'Order drafted with manufacturers successfully. Awaiting founder payment.',
        totalBaseCostToPay: draftedPackages.reduce((sum, p) => sum + p.baseCostToPay, 0),
        draftedPackages
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server error generating manufacturer draft', details: err.message })
    };
  }
};
