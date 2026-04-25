import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://crosscartbd.com";
const API_KEY = "f0d27add1335406fb5938e3e3f73abe6";

const allPages = [
  `${BASE_URL}/`,
  `${BASE_URL}/track`,
  `${BASE_URL}/price`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/about`,
  `${BASE_URL}/about/about-cross-cart`,
  `${BASE_URL}/about/coverage-area`,
  `${BASE_URL}/about/faq`,
  `${BASE_URL}/about/help-and-support`,
  `${BASE_URL}/about/our-partners`,
  `${BASE_URL}/about/our-team`,
  `${BASE_URL}/about/why-cross-cart`,
  `${BASE_URL}/about/work-process`,
  `${BASE_URL}/services/bulk-shipping`,
  `${BASE_URL}/services/custom-clearance`,
  `${BASE_URL}/services/express-delivery`,
  `${BASE_URL}/services/international-shipping`,
  `${BASE_URL}/services/parcel-tracking`,
  `${BASE_URL}/services/service-updates`,
  `${BASE_URL}/services/warehousing`,
  `${BASE_URL}/legal/privacy-policy`,
  `${BASE_URL}/legal/refund-policy`,
  `${BASE_URL}/legal/shipping-policy`,
  `${BASE_URL}/legal/terms-and-conditions`,
  `${BASE_URL}/dashboard`,
  `${BASE_URL}/dashboard/orders`,
  `${BASE_URL}/dashboard/shipments`,
  `${BASE_URL}/dashboard/shipments/new`,
  `${BASE_URL}/dashboard/payments`,
  `${BASE_URL}/dashboard/notifications`,
  `${BASE_URL}/dashboard/settings`,
  `${BASE_URL}/dashboard/addresses`,
  `${BASE_URL}/dashboard/track`,
  `${BASE_URL}/dashboard/support`,
  `${BASE_URL}/admin`,
  `${BASE_URL}/admin/orders`,
  `${BASE_URL}/admin/shipments`,
  `${BASE_URL}/admin/pickups`,
  `${BASE_URL}/admin/users`,
  `${BASE_URL}/admin/payments`,
  `${BASE_URL}/admin/zones`,
  `${BASE_URL}/admin/tracking`,
  `${BASE_URL}/admin/tickets`,
  `${BASE_URL}/admin/reports`,
  `${BASE_URL}/admin/settings`,
  `${BASE_URL}/admin/pricing`,
  `${BASE_URL}/admin/activity`,
  `${BASE_URL}/admin/notifications`,
  `${BASE_URL}/admin/login`,
  `${BASE_URL}/crm`,
  `${BASE_URL}/crm/customers`,
  `${BASE_URL}/crm/leads`,
  `${BASE_URL}/crm/quotations`,
  `${BASE_URL}/crm/calls`,
  `${BASE_URL}/crm/tasks`,
  `${BASE_URL}/crm/reports`,
  `${BASE_URL}/crm/settings`,
];

const searchEngines = [
  "https://www.bing.com/indexnow",
  "https://search.brave.com/indexnow",
  "https://api.indexnow.org/indexnow",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { host, key, keyLocation, urlList } = body;

    if (!host || !key) {
      return NextResponse.json({ error: "Invalid format" }, { status: 400 });
    }

    if (key !== API_KEY) {
      return NextResponse.json({ error: "Invalid key" }, { status: 403 });
    }

    const urlsToSubmit = urlList || allPages;

    const results = await Promise.allSettled(
      searchEngines.map((engine) =>
        fetch(engine, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            host,
            key,
            keyLocation: keyLocation || `${BASE_URL}/${API_KEY}.txt`,
            urlList: urlsToSubmit,
          }),
        })
      )
    );

    const successful = results.filter((r) => r.status === "fulfilled").length;

    return NextResponse.json({
      success: true,
      submitted: urlsToSubmit.length,
      enginesResponded: successful,
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: "IndexNow API endpoint",
    usage: "POST with { host, key, keyLocation, urlList }",
    allPages: allPages.length,
  });
}